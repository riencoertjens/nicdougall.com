const base = {
  owner: 'WEB-hart',
  name: `long site name`,
  shortName: `shortname`,
  tagline: `fancy catchphrase about the brand`,
  twitter: '@rien_coertjens',
  instagram: '@rien_coertjens',
  facebookAppID: '',
  facebookPage: '',
  url: `https://site.netlify.com`, // no trailing slash!
  // url: `https://www.site.com`,
  titleTemplateSeperator: ' | ',
  icon: 'src/images/site-icon.png', // This path is relative to the root of the site.
  image: `src/images/social-image.png`, // This path is relative to the root of the site.
  language: `en`,
  description: `Cillum do duis sit incididunt minim aute laboris qui duis tempor id culpa est veniam. Anim consectetur ea mollit ex consectetur est adipisicing eiusmod. Commodo et mollit nostrud consectetur.`,
  primaryColor: '#000',
  primaryBgColor: '#fff',
}

const config = {
  base: base,
  siteMetadata: {
    owner: base.owner,
    siteTitle: base.tagline,
    siteDescription: base.description,
    siteImage: base.image,
    siteIcon: base.icon,
    siteUrl: base.url,
    titleTemplate: `%s${base.titleTemplateSeperator}${base.name}`,
    twitterUsername: base.twitter,
    facebookAppID: base.facebookAppID,
    facebookPage: base.facebookPage,
    siteLanguage: base.language,
    organization: {
      name: base.owner,
      url: base.url,
      logo: `${base.url}/icons/icon-512x512.png`,
    },
  },
  manifest: {
    name: base.name,
    short_name: base.shortName,
    start_url: '/',
    background_color: base.primaryBgColor,
    theme_color: base.primaryColor,
    display: 'minimal-ui',
    icon: base.icon, // This path is relative to the root of the site.
  },
}

module.exports = config
