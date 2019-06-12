const base = {
  owner: `Nicolas Dougall`,
  name: `Nicolas Dougall`,
  shortName: `ndougall`,
  tagline: `plant-powered triathlete`,
  twitter: `nic_dougall`,
  instagram: `ndougall`,
  email: `ndougall92@gmail.com`,
  phone: `+1(650) 454-6751`,
  facebookAppID: ``,
  facebookPage: `155775668303609`,
  // url: `https://nicdougall.netlify.com`, // no trailing slash!
  url: `https://www.nicdougall.com`,
  titleTemplateSeperator: ` | `,
  icon: `src/images/site-icon.png`, // 1500x1500 This path is relative to the root of the site.
  image: `/images/social-image.jpg`, // 1200x630 This path is relative to the root of the site.
  language: `en`,
  description: `Completing the 10 year challenge in style! U19 olympic distance world champion of 2009, plant powered triathlete, Nic Dougall returns to his triathlon roots after working on his cycling leg in world's highest level bike racing league`,
  primaryColor: `#F0AB25`,
  primaryBgColor: `#0B2952`,
}

const config = {
  base: base,
  siteMetadata: {
    owner: base.owner,
    email: base.email,
    phone: base.phone,
    siteTitle: base.tagline,
    siteDescription: base.description,
    siteTagline: base.tagline,
    siteImage: base.image,
    siteIcon: base.icon,
    siteUrl: base.url,
    titleTemplate: `%s${base.titleTemplateSeperator}${base.name}`,
    twitterUsername: base.twitter,
    instagramUsername: base.instagram,
    facebookPage: base.facebookPage,
    facebookAppID: base.facebookAppID,
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
    start_url: `/`,
    background_color: base.primaryBgColor,
    theme_color: base.primaryColor,
    display: `minimal-ui`,
    icon: base.icon, // This path is relative to the root of the site.
  },
}

module.exports = config
