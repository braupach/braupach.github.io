// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Benno Raupach",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://benno-raupach.de",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "braupach", // Usually your GitHub org/user name.
  projectName: "braupach.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de-DE",
    locales: ["de-DE"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Benno Raupach",
/*        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
              }, */
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          /*{
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },*/
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Benno Raupach. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
};

module.exports = config;
