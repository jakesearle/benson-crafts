import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Benson Craft Circle",
  description: "A craft circle hosted in Benson, North Carolina",
  appearance: false,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Calendar', link: '/calendar' },
      { text: 'Contact', link: '/contact' },
      { text: 'FAQ', link: '/faq' },
      { text: 'About', link: '/about' },
    ],
    // outline: false,

    socialLinks: [
      { icon: 'ravelry', link: 'https://www.ravelry.com/' }, // TODO:: replace this link
      { icon: 'facebook', link: 'https://www.facebook.com/groups/895094962977446' }, // TODO:: replace my link
      { icon: 'gitbook', link: 'https://www.townofbenson.com/2170/Library' }
    ],
    footer: {
      message: 'Made with ♥ in Benson, NC · Benson Craft Circle',
      // copyright: 'Copyright © 2019-present Evan You' // TODO:: Do i have copyright?
    }
  },
  transformHead({ assets }) {
    // adjust the regex accordingly to match your font
    const myFontFile = assets.find(file => /font-name\.[\w-]+\.woff2/.test(file))
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  }
})
