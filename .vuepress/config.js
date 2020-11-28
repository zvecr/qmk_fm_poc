const rp = require('request-promise');

async function fetchKeyboards() {
    const {keyboards} = await rp({
        uri: 'https://keyboards.qmk.fm/v1/keyboard_list.json',
        json: true,
    });
    return keyboards
    //return ["lets_split", "xd84", "xd002"]
}

module.exports = {
    dest:'.dist',
    temp:'.temp',
    base:'/qmk_fm_poc/',

    shouldPrefetch: (file, type) => {
      return type !== 'script'
    },

    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    title: 'QMK Firmware',
    description: 'Open-source keyboard firmware for Atmel AVR and Arm USB families',
    theme_: 'vuetify2',
    themeConfig: {
        logo: '/logo.png',
        search: false,
        lastUpdated: false,
        searchPlaceholder: 'Search for keyboard...',
        nav: [
            { text: 'Guides', link: '/guides/' },
            { text: 'Keyboards', link: '/keyboards/' },
            { text: 'Docs', link: 'https://docs.qmk.fm', target: '_self' }
        ],
        sidebar: [
            {
              title: 'Guides',
              path: '/guides/',
              collapsable: false,
              children: [
                '/guides/users',
                '/guides/buyers',
                '/guides/creators',
                '/guides/integrators',
              ]
            },
            {
                title: 'Supported Keyboards',
                path: '/keyboards/',
                sidebarDepth: -1
            },
            {
                title: 'Tools',
                collapsable: false,
                children: [
                    {
                        title: 'Configurator',
                        type: 'external',
                        path: 'https://config.qmk.fm/'
                    },
                    '/other/toolbox',
                ]
            },
            {
                title: 'Pages',
                collapsable: false,
                children: [
                  '/other/about',
                  '/other/proton_c',
                  '/other/support',
                  '/other/coc',
                  '/other/licence',

                ]
            },
          ]
    },
    async additionalPages() {
        const keyboards = await fetchKeyboards()

        return Promise.all(keyboards.map(async function (keyboard) {
            let content = 'no readme'
            // try{
            // content = await rp(`https://keyboards.qmk.fm/v1/keyboards/${keyboard}/readme.md`)
            // }catch(e){
            //     console.log(keyboard)
            // }

            content = `<KeyboardReadme keyboard="${keyboard}"/>`
            return {
                path: `/keyboards/${keyboard}.html`,
                content: `---
title: "${keyboard}"
---
${content}
`
            }
        }))
    },
    plugins: [
        ['@vuepress/search', {
          test: '/keyboards/'
        }]
      ],
      async clientDynamicModules() {
        const keyboards = await fetchKeyboards()
        return {
          name: 'constants.js',
          content: `export const KEYBOARDS = ${JSON.stringify(keyboards)}`
        }
      }
}