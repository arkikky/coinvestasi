/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./styles/**/*.css",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,tsx}",
    "./section/**/*.{js,tsx}",
    "./layouts/**/*.{js,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#FFBE32",
        secondary: "#2B64CE",
        danger: "#D64A4A",
        success: "#188035",
        black: {
          50: "#43464D",
          100: "#241B1B",
          900: "#000000",
        },
        gray: {
          50: "#F8F8F8",
          100: "#A6B0C0",
          200: "#A9ACAF",
          300: "#778090",
          400: "#BBC9E8",
          500: "#778090",
        },
        blue: {
          50: "#F2F5F9",
          100: "#D3D9E3",
          200: "#2B64CE",
          300: "#9CADD3",
          400: "#6F84AD",
          500: "#2B4A86",
          600: "#1E386B",
          700: "#192A4B",
        },
        lightblue: {
          50: "#EEF3F9",
          400: "#2B64CE",
        },
        green: {
          50: "#E4FFEC",
          100: "#188035",
        },
        yellow: {
          200: "#FFBE32",
        },
        red: {
          50: "#FFEAEA",
          100: "#D64A4A",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        initial: "initial",
        inherit: "inherit",
        unset: "unset",
      },
      letterSpacing: {
        wide: "0.015em",
        tight: "-0.03em",
      },
      spacing: {
        4.5: "18px",
        13: "52px",
        18: "72px",
        22: "86px",
        34: "136px",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        19: "repeat(19, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        21: "repeat(21, minmax(0, 1fr))",
        22: "repeat(22, minmax(0, 1fr))",
        23: "repeat(23, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        17: "repeat(17, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        19: "repeat(19, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        21: "repeat(21, minmax(0, 1fr))",
        22: "repeat(22, minmax(0, 1fr))",
        23: "repeat(23, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "max-sm": {
          max: "640px",
        },
        "max-md": {
          max: "768px",
        },
        "max-lg": {
          max: "1024px",
        },
        "max-xl": {
          max: "1280px",
        },
        "max-2xl": {
          max: "1440px",
        },
      },
      zIndex: {
        px: "1",
        0.5: "2",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        sm: "500",
        base: "1050",
        lg: "1550",
        xl: "2050",
        "2xl": "2550",
        "3xl": "5050",
        "4xl": "7550",
        "5xl": "9550",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms")({
      strategy: "base", // Only generate global styles
      strategy: "class", // Only generate classes
    }),
    require("tailwind-scrollbar-hide"),

    // Variant
    ({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("supports-grid", "@supports (display: grid)");
    },

    // Container
    ({ addComponents }) => {
      addComponents({
        ".container": {
          padding: "0 16px",
          margin: "0 auto",
          width: "100%",
          maxWidth: "100%",

          "@screen sm": [
            {
              padding: "0 0",
              maxWidth: "640px",
            },
          ],
          "@screen md": {
            maxWidth: "722px",
          },
          "@screen lg": {
            maxWidth: "958px",
          },
          "@screen xl": {
            maxWidth: "1214px",
          },
          "@screen 2xl": {
            maxWidth: "1328px",
          },
        },
      });
    },

    // Typography
    ({ addBase, theme }) => {
      addBase({
        h1: {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: "32px",
          lineHeight: "44px",
          fontWeight: theme("fontWeight.bold"),

          "@screen lg": [
            {
              fontSize: "40px",
              lineHeight: "52px",
            },
          ],
        },
        ".h1": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: "32px",
          lineHeight: "44px",
          fontWeight: theme("fontWeight.bold"),

          "@screen lg": [
            {
              fontSize: "40px",
              lineHeight: "52px",
            },
          ],
        },
        h2: {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "34px",

          "@screen lg": [
            {
              fontSize: "32px",
              lineHeight: "44px",
            },
          ],
        },
        ".h2": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "34px",

          "@screen lg": [
            {
              fontSize: "32px",
              lineHeight: "44px",
            },
          ],
        },
        h3: {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "28px",

          "@screen lg": [
            {
              fontSize: theme("fontSize.2xl"),
              lineHeight: "34px",
            },
          ],
        },
        ".h3": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "28px",

          "@screen lg": [
            {
              fontSize: theme("fontSize.2xl"),
              lineHeight: "34px",
            },
          ],
        },
        h4: {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.semibold"),

          "@screen lg": [
            {
              fontSize: theme("fontSize.xl"),
              lineHeight: "28px",
            },
          ],
        },
        ".h4": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.semibold"),

          "@screen lg": [
            {
              fontSize: theme("fontSize.xl"),
              lineHeight: "28px",
            },
          ],
        },
        h5: {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.semibold"),

          "@screen lg": [
            {
              fontSize: theme("fontSize.lg"),
            },
          ],
        },
        ".h5": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.semibold"),

          "@screen lg": [
            {
              fontSize: theme("fontSize.lg"),
            },
          ],
        },
        h6: {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "18px",

          "@screen lg": [
            {
              fontSize: theme("fontSize.base"),
              lineHeight: "22px",
            },
          ],
        },
        ".h6": {
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "18px",

          "@screen lg": [
            {
              fontSize: theme("fontSize.base"),
              lineHeight: "22px",
            },
          ],
        },
        p: {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.medium"),
          lineHeight: "22px",

          "@screen lg": [
            {
              fontSize: theme("fontSize.base"),
              lineHeight: "28px",
            },
          ],
        },
        label: {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.medium"),

          "@screen lg": [
            {
              fontSize: theme("fontSize.base"),
            },
          ],
        },
        ".text-body-caption": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.normal"),
        },
        ".text-body-sm": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.normal"),
        },
        ".text-body-base": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.normal"),

          "@screen lg": [
            {
              fontSize: theme("fontSize.base"),
            },
          ],
        },
        ".text-body-lg": {
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.medium"),

          "@screen lg": [
            {
              fontSize: theme("fontSize.xl"),
            },
          ],
        },
      });
    },

    // Word Break
    ({ addUtilities }) => {
      addUtilities({
        ".break-area": {
          wordBreak: "break-word",
        },
      });
    },

    // Buttons
    ({ addComponents, theme }) => {
      addComponents({
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: theme("borderWidth.2"),
          borderColor: theme("borderColor.black.100"),
          borderRadius: theme("borderRadius.none"),
          boxShadow: theme("boxShadow.none"),
          fontFamily: theme("fontFamily.inter"),
          fontSize: theme("fontSize.sm"),
          fontWeight: "700",
          lineHeight: theme("lineHeight.unset"),
          letterSpacing: theme("letterSpacing.wide"),
          outline: "none",
          position: "relative",
          paddingTop: theme("padding.3"),
          paddingBottom: theme("padding.3"),
          paddingLeft: theme("padding.4"),
          paddingRight: theme("padding.4"),
          width: theme("width.max"),
        },
        ".btn-sm": {
          fontSize: theme("fontSize.xs"),
          paddingTop: theme("padding.2"),
          paddingBottom: theme("padding.2"),
          paddingLeft: theme("padding.2"),
          paddingRight: theme("padding.2"),
        },
        ".btn-lg": {
          fontSize: theme("fontSize.sm"),
          paddingTop: theme("padding.4"),
          paddingBottom: theme("padding.4"),
          paddingLeft: theme("padding.6"),
          paddingRight: theme("padding.6"),
        },
        ".btn-pill": {
          borderRadius: theme("borderRadius.full"),
        },
        ".btn-square": {
          borderRadius: theme("borderRadius.none"),
        },
        ".btn-block": {
          width: theme("width.full"),
        },
        ".btn-max": {
          width: theme("width.max"),
        },
      });
    },

    // Buttons
    ({ addComponents, theme }) => {
      addComponents({
        ".btn-primary": {
          color: theme("textColor.black.100"),
          backgroundColor: theme("backgroundColor.primary"),
        },
        ".btn-secondary": {
          color: theme("textColor.white"),
          backgroundColor: theme("backgroundColor.secondary"),
        },
        ".btn-success": {
          color: theme("textColor.white"),
          backgroundColor: theme("backgroundColor.success"),
        },
        ".btn-danger": {
          color: theme("textColor.white"),
          backgroundColor: theme("backgroundColor.danger"),
        },
        ".btn-subtle": {
          color: theme("textColor.black.100"),
          backgroundColor: theme("backgroundColor.lightblue.50"),
        },
        ".btn-white": {
          color: theme("textColor.black.100"),
          backgroundColor: theme("backgroundColor.white"),
        },
        ".btn-outline-primary": {
          color: theme("textColor.black.100"),
          backgroundColor: theme("backgroundColor.primary"),
        },
        ".btn-outline-secondary": {
          color: theme("textColor.white"),
          backgroundColor: theme("backgroundColor.secondary"),
        },
        ".btn-outline-success": {
          color: theme("textColor.white"),
          backgroundColor: theme("backgroundColor.success"),
        },
        ".btn-outline-danger": {
          color: theme("textColor.white"),
          backgroundColor: theme("backgroundColor.danger"),
        },
        ".btn-outline-subtle": {
          color: theme("textColor.black.100"),
          backgroundColor: theme("backgroundColor.lightblue.50"),
        },
        ".btn-outline-white": {
          color: theme("textColor.black.100"),
          backgroundColor: theme("backgroundColor.white"),
        },
      });
    },
  ],
};
