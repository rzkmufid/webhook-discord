import { defineConfig } from "@pandacss/dev";
import { slider } from "./src/recipes/slider";
import { button } from "./src/recipes/button";
import { input } from "./src/recipes/input";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,vue}", "./pages/**/*.{js,jsx,ts,tsx,vue}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      slotRecipes: {
        slider,
      },
      recipes: {
        button,
        input,
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "vue",
});
