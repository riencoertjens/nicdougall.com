const fs = require(`fs`)
const request = require(`request`)
const mkdirp = require(`mkdirp`)
const ProgressBar = require(`progress`)
const { get } = require(`lodash`)
const download = require(`./download-file`)

module.exports = function(username){
  if (!username) {
    console.log(
      `
  You didn't supply an Instagram username!
  Run this command like:

  node scrape.js INSTAGRAM_USERNAME
      `
    )
    process.exit()
  }

  // Convert timestamp to ISO 8601.
  const toISO8601 = timestamp => new Date(timestamp * 1000).toJSON()

  // Create the progress bar
  const bar = new ProgressBar(
    `Downloading instagram posts [:bar] :current/:total :elapsed secs :percent`,
    {
      total: 0,
      width: 30,
    }
  )

  // Create the images directory
  mkdirp.sync(`./data/images`)

  let posts = []

  // Write json
  const saveJSON = _ =>
    fs.writeFileSync(`./data/posts.json`, JSON.stringify(posts, '', 2))

  const getPosts = maxId => {

    // let url = `https://www.instagram.com/${username}/?__a=1`
    let url = `https://www.instagram.com/${username}`
    if (maxId) url += `&max_id=${maxId}`

    request(url, { encoding: `utf8` }, (err, res, body) => {
      if (err) console.log(`error: ${err}`)

      body = body.split('window._sharedData = ')[1];
      body = body.split(';</script>')[0];
      body = JSON.parse(body)

      body.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
        .map(item => {
          // Parse item to a simple object
          item = item.node

          return {
            id: get(item, `id`),
            code: get(item, `shortcode`),
            time: toISO8601(get(item, `taken_at_timestamp`)),
            type: get(item, `__typename`),
            likes: get(item, `edge_liked_by.count`),
            comment: get(item, `edge_media_to_comment.count`),
            text: get(item, `edge_media_to_caption.edges[0].node.text`),
            media: get(item, `thumbnail_src`),
            image: `images/${item.shortcode}.jpg`,
            userName: get(body, `entry_data.ProfilePage[0].graphql.user.username`),
            userFullName: get(body, `entry_data.ProfilePage[0].graphql.user.full_name`),
            userBio: get(body, `entry_data.ProfilePage[0].graphql.user.biography`),
            userPostCount: get(body, `entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.count`),
            userFollowers: get(body, `entry_data.ProfilePage[0].graphql.user.edge_followed_by.count`),
            avatar: get(body, `entry_data.ProfilePage[0].graphql.user.profile_pic_url`)
          }
        })
        .forEach(item => {

          if (posts.length >= 100) return

          // Download image locally and update progress bar
          bar.total++
          download(item.media, `./data/images/${item.code}.jpg`, _ => bar.tick())

          // Add item to posts
          posts.push(item)
        })

      // const lastId = get(body, `entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.page_info.end_cursor`)
      // if (posts.length < 100 && lastId)
      //   getPosts(lastId)
      // else
        saveJSON()
    })
  }

  getPosts()

}