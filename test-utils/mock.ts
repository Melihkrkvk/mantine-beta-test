
export const res = {
  grid: {
    columns: 12,
  },
  rows: [
    {
      components: [
        {
          name: 'SimpleCard',
          props: {
            title: 'Test 1',
            descp: 'Test 1 Descp',
            link: '/',
            cardImage: 'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
            cardImageAlt: 'Test Card',
          },
          breakpoints: {
            lg: 6,
            md: 6,
            sm: 12,
            xs: 12,
          },
        },
        {
          breakpoints: {
            lg: 6,
            md: 6,
            sm: 12,
            xs: 12,
          },
          columns: {
            columns: 2,
            components: [
              {
                name: 'SimpleCard',
                props: {
                  title: 'Test 2',
                  descp: 'Test 2 Descp',
                  link: '/',
                  cardImage: 'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                  cardImageAlt: 'Test Card 2',
                },
              },
              {
                name: 'SimpleCard',
                props: {
                  title: 'Test 3',
                  descp: 'Test 3 Descp',
                  link: '/',
                  cardImage: 'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                  cardImageAlt: 'Test Card 3',
                },
              },
            ]
          },
        },
      ],
    },
  ]
}

/* export const res = {
  grid: {
    columns: 12,
  },
  rows: [
    {
      components: [
        {
          name: 'BigCard',
          props: {
            title: "Deneme",
            badgeTitle: "Deneme2",
            hasExtra: false,
            link: '/haber',
            listType: "custom",
            separator: true,
            badgeIconName: "IconCircle",
            listIconName: "IconCircleDashed",
            date: "Agust, 03 2023",
            listIconBackground: true,
            listIconBgSettings: {
              radius: 'lg',
            },
            listIconSettings: {
              size: 20,
            },
            cardImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            cardImageAlt: "Temsili görsel",
            listData: [
              {
                withImage: false,
                content: 'deneme asd basd dsa',
                link: '/',
              },
              {
                withImage: false,
                content:
                  'deneme asd basd dsa askdjkasdlj aksdjaskldj kasdjkasldjask dsajaskldjask djask djk asdasdas as das dsa sa  d',
                link: '/',
              },
              {
                withImage: false,
                content: 'deneme asd basd dsa askdjkasdlj aksdjaskldj as das dsa sa  d',
                link: '/',
              },
            ]
          },
          breakpoints: {
            lg: 6,
            md: 4,
            sm: 12,
            xs: 12,
          },
        },
        {
          breakpoints: {
            lg: 6,
            md: 12,
            sm: 12,
            xs: 12,
          },
          columns: {
            columns: 2,
            components: [
              {
                name: 'BigCard',
                props: {
                  title: 'deneme 3',
                  link: '/',
                  badgeTitle: "Deneme2",
                  hasExtra: false,
                  listType: "custom",
                  separator: true,
                  badgeIconName: "IconCircle",
                  listIconName: "IconCircleDashed",
                  date: "Agust, 03 2023",
                  listIconBackground: true,
                  listIconBgSettings: {
                    radius: 'lg',
                  },
                  listIconSettings: {
                    size: 20,
                  },
                  cardImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                  cardImageAlt: "Temsili görsel",
                }
              },
              {
                name: 'BigCard',
                props: {
                  title: 'deneme 3',
                  link: '/',
                  badgeTitle: "Deneme2",
                  hasExtra: false,
                  listType: "custom",
                  separator: true,
                  badgeIconName: "IconCircle",
                  listIconName: "IconCircleDashed",
                  date: "Agust, 03 2023",
                  listIconBackground: true,
                  listIconBgSettings: {
                    radius: 'lg',
                  },
                  listIconSettings: {
                    size: 20,
                  },
                  cardImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                  cardImageAlt: "Temsili görsel",
                }
              },
              {
                name: 'BigCard',
                props: {
                  title: 'deneme 3',
                  link: '/',
                  badgeTitle: "Deneme2",
                  hasExtra: false,
                  listType: "custom",
                  separator: true,
                  badgeIconName: "IconCircle",
                  listIconName: "IconCircleDashed",
                  date: "Agust, 03 2023",
                  listIconBackground: true,
                  listIconBgSettings: {
                    radius: 'lg',
                  },
                  listIconSettings: {
                    size: 20,
                  },
                  cardImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                  cardImageAlt: "Temsili görsel",
                }
              },
              {
                name: 'BigCard',
                props: {
                  title: 'deneme 3',
                  link: '/',
                  badgeTitle: "Deneme2",
                  hasExtra: false,
                  listType: "custom",
                  separator: true,
                  badgeIconName: "IconCircle",
                  listIconName: "IconCircleDashed",
                  date: "Agust, 03 2023",
                  listIconBackground: true,
                  listIconBgSettings: {
                    radius: 'lg',
                  },
                  listIconSettings: {
                    size: 20,
                  },
                  cardImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                  cardImageAlt: "Temsili görsel",
                }
              },
            ],
          }
        }
      ],
    },
    {
      components: [
        {
          name: 'BigCard',
          props: {
            title: "Deneme",
            badgeTitle: "Deneme2",
            hasExtra: true,
            link: '/',
            listType: "custom",
            separator: true,
            badgeIconName: "IconCircle",
            listIconName: "IconCircleDashed",
            date: "Agust, 03 2023",
            listIconBackground: true,
            listIconBgSettings: {
              radius: 'lg',
            },
            listIconSettings: {
              size: 20,
            },
            cardImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            cardImageAlt: "Temsili görsel",
            listData: [
              {
                withImage: false,
                content: 'deneme asd basd dsa',
                link: '/',
              },
              {
                withImage: false,
                content:
                  'deneme asd basd dsa askdjkasdlj aksdjaskldj kasdjkasldjask dsajaskldjask djask djk asdasdas as das dsa sa  d',
                link: '/',
              },
              {
                withImage: false,
                content: 'deneme asd basd dsa askdjkasdlj aksdjaskldj as das dsa sa  d',
                link: '/',
              },
            ]
          },
          breakpoints: {
            lg: 6,
            md: 4,
            sm: 12,
            xs: 12,
          },
        },
      ],
    },
  ],
}; */