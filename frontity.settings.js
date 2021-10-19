const settings = {
  name: "kaylamoz",
  state: {
    frontity: {
      url: "https://data.kaylamoz.com",
      title: "Kayla Moz website",
      description: "Official website of Kayla Moz.",
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
          url: "https://test.frontity.org",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
