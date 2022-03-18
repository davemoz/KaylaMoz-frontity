const settings = {
  name: "kaylamoz",
  state: {
    frontity: {
      url: "https://www.kaylamoz.com",
      title: "Kayla Moz",
      description: "Official portfolio of Kayla Moz.",
    },
  },
  packages: [
    {
      name: "KaylaMozTheme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://data.kaylamoz.com",
          homepage: "/home",
          postsPage: "/blog",
          params: {
            per_page: 30
          },
          postTypes: [
            {
              type: "portfolio",
              endpoint: "portfolio",
              archive: "/portfolio",
            },
          ],
          taxonomies: [
            {
              taxonomy: 'project-type',
              endpoint: 'project-type',
              postTypeEndpoint: 'portfolio',
              params: {
                per_page: 10,
                _embed: true,
              }
            },
            {
              taxonomy: 'project-tag',
              endpoint: 'project-tag',
              postTypeEndpoint: 'portfolio',
              params: {
                per_page: 10,
                _embed: true,
              }
            }
          ]
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
