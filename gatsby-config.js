/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `training-gatsby-2`,
    siteUrl: `https://www.yourdomain.tld`,
    menu: [
      {
        name: "home",
        path: '/',
        icon: '',
        dropdown: [
          {
            name: "creative agency",
            path: '/creative-agency',
            icon: '',
            dropdown: null
          }, {
            name: "design-studio",
            path: '/design-studio',
            icon: '',
            dropdown: null
          }, {
            name: "digital agency",
            path: '/digital-agency',
            icon: '',
            dropdown: null
          }, {
            name: "construction",
            path: '/construction',
            icon: '',
            dropdown: null
          }, {
            name: "coporate",
            path: '/coporate',
            icon: '',
            dropdown: null
          }
        ]
      }, {
        name: 'features',
        path: '/features',
        icon: '',
        dropdown: [
          {
            name: 'header styles',
            path: '/header-styles',
            icon: '',
            dropdown: [
              {
                name: 'header v1',
                path: '/header-v1',
                icon: '',
                dropdown: null
              }, {
                name: 'header v2',
                path: '/header-v2',
                icon: '',
                dropdown: null
              },
            ]
          }, {
            name: 'mega menu',
            path: '/mega-menu',
            icon: '',
            dropdown: [
              {
                name: 'simple mega',
                path: '/simple-mega',
                icon: '',
                dropdown: null
              }, {
                name: 'with image',
                path: '/with-image',
                icon: '',
                dropdown: null
              }, {
                name: 'with video',
                path: '/with-video',
                icon: '',
                dropdown: null
              }
            ]
          }, {
            name: 'footer styles',
            path: '/footer-styles',
            icon: '',
            dropdown: [
              {
                name: 'footer v1',
                path: '/footer-v1',
                icon: '',
                dropdown: null
              }, {
                name: 'footer v2',
                path: '/footer-v2',
                icon: '',
                dropdown: null
              }
            ]
          }, {
            name: 'rev slider',
            path: '/rev-slider',
            icon: '',
            dropdown: [
              {
                name: 'premium slides',
                path: '/premium-slides',
                icon: '',
                dropdown: null
              }
            ]
          }, {
            name: 'side panel',
            path: '/side panel',
            icon: '',
            dropdown: [
              {
                name: 'left overlay',
                path: '/left-overlay',
                icon: '',
                dropdown: null
              }
            ]
          }, {
            name: 'page banners',
            path: '/page-banners',
            icon: '',
            dropdown: [
              {
                name: 'slide bg',
                path: '/slide-bg',
                icon: '',
                dropdown: null
              }
            ]
          }, {
            name: 'banner titles',
            path: '/banner-titles',
            icon: '',
            dropdown: [
              {
                name: 'left aligned',
                path: '/left-aligned',
                icon: '',
                dropdown: null
              }
            ]
          }, {
            name: 'user profiles',
            path: '/user-profiles',
            icon: '',
            dropdown: [
              {
                name: 'sign in',
                path: '/sign-in',
                icon: '',
                dropdown: null
              }, {
                name: 'sign up',
                path: '/sign-up',
                icon: '',
                dropdown: null
              }
            ]
          }, {
            name: 'site search',
            path: '/site-search',
            icon: '',
            dropdown: [
              {
                name: 'Header search',
                path: '',
                icon: '',
                dropdown: null
              }, {
                name: 'Transparent BG',
                path: '',
                icon: '',
                dropdown: null
              }, 
            ]
          }
        ]
      }, {
        name: 'portfolio',
        path: '/portfolio',
        icon: '',
        dropdown: [
          {
            name: 'no sidebar',
            path: '/no-sidebar',
            icon: '',
            dropdown: [
              {
                name: '2 column',
                path: '',
                icon: '',
                dropdown: null
              }, {
                name: '3 column',
                path: '',
                icon: '',
                dropdown: null
              },
            ]
          }, {
            name: 'left-sidebar',
            path: '/left-sidebar',
            icon: '',
            dropdown: [
              {
                name: '2 column',
                path: '',
                icon: '',
                dropdown: null
              }, {
                name: '3 column',
                path: '',
                icon: '',
                dropdown: null
              },
            ]
          }, {
            name: 'right sidebar',
            path: '/right-sidebar',
            icon: '',
            dropdown: [
              {
                name: '2 column',
                path: '',
                icon: '',
                dropdown: null
              }, {
                name: '3 column',
                path: '',
                icon: '',
                dropdown: null
              },
            ]
          }, {
            name: 'masonary',
            path: '/masonary',
            icon: '',
            dropdown: null
          }, {
            name: 'full width',
            path: '/full-width',
            icon: '',
            dropdown: null
          }, {
            name: 'full spaced',
            path: '/full-spaced',
            icon: '',
            dropdown: null
          }, {
            name: 'boxed',
            path: '/boxed',
            icon: '',
            dropdown: null
          }, {
            name: 'single v1',
            path: '',
            icon: '',
            dropdown: null
          }, {
            name: 'single v2',
            path: '',
            icon: '',
            dropdown: null
          }
        ]
      }, {
        name: 'elements',
        path: '/elements',
        icon: '',
        mega: [
          {
            name: 'Group 1',
            path: '',
            icon: '',
            dropdown: [
              {
                name: 'Accordions',
                path: '',
                icon: 'fas fa-list',
                dropdown: null
              }, {
                name: 'Animations',
                path: '',
                icon: 'fas fa-magic',
                dropdown: null
              }, {
                name: 'Button',
                path: '',
                icon: 'fas fa-link',
                dropdown: null
              }, {
                name: 'Carousel',
                path: '',
                icon: 'fas fa-heart',
                dropdown: null
              }, {
                name: 'Tabs',
                path: '',
                icon: 'fas fa-tasks-alt',
                dropdown: null
              }, {
                name: 'Columns',
                path: '',
                icon: 'fas fa-columns',
                dropdown: null
              }, {
                name: 'Counters',
                path: '',
                icon: 'fas fa-clock',
                dropdown: null
              }, {
                name: 'Data tables',
                path: '',
                icon: 'fas fa-table',
                dropdown: null
              }

            ],
          }, {
            name: 'Group 2',
            path: '',
            icon: '',
            dropdown: [
              {
                name: 'Date & time pickers',
                path: '',
                icon: 'fas fa-calendar',
                dropdown: null
              }, {
                name: 'Dividers',
                path: '',
                icon: 'fas fa-indent',
                dropdown: null
              }, {
                name: 'Icon boxes',
                path: '',
                icon: 'fas fa-lightbulb-on',
                dropdown: null
              }, {
                name: 'Galleries',
                path: '',
                icon: 'fas fa-images',
                dropdown: null
              }, {
                name: 'Header styles',
                path: '',
                icon: 'fas fa-pencil',
                dropdown: null
              }, {
                name: 'Icon lists',
                path: '',
                icon: 'far fa-list-alt',
                dropdown: null
              }, {
                name: 'Labels',
                path: '',
                icon: 'fas fa-plus-circle',
                dropdown: null
              }, {
                name: 'Lightbox',
                path: '',
                icon: 'fas fa-expand-alt',
                dropdown: null
              }
            ]
          }, {
            name: 'Group 3',
            path: '',
            icon: '',
            dropdown: [
              {
                name: 'Maps',
                path: '',
                icon: 'fas fa-map-marker-alt',
                dropdown: null
              }, {
                name: 'Media embeds',
                path: '',
                icon: 'fas fa-play',
                dropdown: null
              }, {
                name: 'Modal boxes',
                path: '',
                icon: 'fal fa-arrows',
                dropdown: null
              }, {
                name: 'Paginations',
                path: '',
                icon: 'fas fa-cogs',
                dropdown: null
              }, {
                name: 'Progress bars',
                path: '',
                icon: 'fas fa-tasks-alt',
                dropdown: null
              }, {
                name: 'Range slider',
                path: '',
                icon: 'far fa-arrows',
                dropdown: null
              }, {
                name: 'Star ratings',
                path: '',
                icon: 'fas fa-star',
                dropdown: null
              }, {
                name: 'Pricing boxes',
                path: '',
                icon: 'fas fa-dollar-sign',
                dropdown: null
              }
            ]
          }, {
            name: 'Group 4',
            path: '',
            icon: '',
            dropdown: [
              {
                name: 'Blockquotes',
                path: '',
                icon: 'fas fa-quote-left',
                dropdown: null
              }, {
                name: 'Font icons',
                path: '',
                icon: 'far fa-laptop',
                dropdown: null
              }, {
                name: 'Sections',
                path: '',
                icon: 'fas fa-folder-open',
                dropdown: null
              }, {
                name: 'Social icons',
                path: '',
                icon: 'fab fa-facebook-f',
                dropdown: null
              }, {
                name: 'Select picker',
                path: '',
                icon: 'far fa-ballot-check',
                dropdown: null
              }, {
                name: 'Select boxes',
                path: '',
                icon: 'fal fa-columns',
                dropdown: null
              }, {
                name: 'Team block',
                path: '',
                icon: 'far fa-ballot-check',
                dropdown: null
              }, {
                name: 'About block',
                path: '',
                icon: 'fal fa-columns',
                dropdown: null
              }
            ]
          }
        ]
      }, {
        name: 'about',
        path: '/about',
        icon: '',
        dropdown: null
      }, {
        name: 'team',
        path: '/team',
        icon: '',
        dropdown: null
      }, {
        name: 'blog',
        path: '/blog',
        icon: '',
        dropdown: [
          {
            name: 'blog one column',
            path: '/',
            icon: '',
            dropdown: null
          }, {
            name: 'blog two column',
            path: '/',
            icon: '',
            dropdown: null
          },
        ]
      }, {
        name: 'contact',
        path: '/contact',
        icon: '',
        dropdown: null
      }
    ]
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'rzk4ksivnjbj',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        
      }
    }
  ],
}
