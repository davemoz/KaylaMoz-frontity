import Root from "./pages";
import link from "@frontity/html2react/processors/link";
import image from "@frontity/html2react/processors/image";

const KaylaMozTheme = {
  name: "KaylaMozTheme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      menu: [
        ["Home", "/"],
        ["About", "/about"],
        ["Blog", "/blog"],
        ["Portfolio", "/portfolio"],
        ["Contact", "/contact"]
      ],
      isMenuOpen: false,
      selectedProjectFilters: {
        'project-type': [],
        'project-tag': [],
      }
    },
  },
  actions: {
    theme: {
      init: ({ libraries }) => {
        // We use html2react to process the <img> tags inside the content HTML.
        libraries.html2react.processors.push(image);
        libraries.html2react.processors.push(link);
      },
      updateProjectFilters: ({ state }) => (taxonomy, value) => {
        if (!!state.theme.projectFilters && state.theme.projectFilters[taxonomy].includes(value)) {
          state.theme.projectFilters[taxonomy].remove(value);
        }
        else {
          !!state.theme.projectFilters && state.theme.projectFilters[taxonomy].push(value);
        }
      },
      toggleMenu: ({ state }) => {
        state.theme.isMenuOpen = !state.theme.isMenuOpen;
      },
    },
  },
};

export default KaylaMozTheme;
