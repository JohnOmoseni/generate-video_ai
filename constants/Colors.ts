/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#FFA001";
const tintColorDark = "#FFA001";

export default {
  light: {
    text: "#ddd",
    background: "#161622",
    secondary: "#FF9C01",
    secondary100: "#FF9001",
    secondary200: "#FF8E01",

    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    gray: "#e5e7eb", //text-gray-200
    gray100: "",

    dark: "#000",
    dark100: "#1E1E2D",
    cardbg: "rgb(82,82,82)",
  },

  dark: {
    text: "#fff",
    background: "#161622",
    secondary: "#FF9C01",
    secondary100: "#FF9001",

    tint: tintColorDark,
    icon: "#FF9C01",
    tabIconDefault: "#CDCDE0",
    tabIconSelected: tintColorDark,

    gray: "#f3f4f6", //text-gray-100
    gray100: "#d1d5db", //text-gray-300

    dark: "#262626", //bg-neutral-800
    dark100: "#525252", ///bg-neutral-800/
    cardbg: "#525252",
  },
};
