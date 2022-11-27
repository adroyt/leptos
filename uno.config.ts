import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

// https://github.com/unocss/unocss/tree/main/packages/vite
// https://github.com/unocss/unocss/tree/main/packages/vite#svelte
// https://github.com/unocss/unocss/tree/main/packages/preset-uno
// https://github.com/unocss/unocss/tree/main/packages/preset-attributify
// https://github.com/unocss/unocss/tree/main/packages/preset-icons
// https://github.com/unocss/unocss/tree/main/packages/transformer-directives
// https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group

// https://github.com/unocss/unocss#configurations
export default defineConfig({
  include: [/.*\/src\/.*\.rs$/],

  // https://github.com/unocss/unocss#extend-theme
  theme: {},

  // https://github.com/unocss/unocss#custom-rules
  rules: [],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: {},

  preflights: [
    {
      getCSS: () => `
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
    `
    }
  ],

  // https://github.com/unocss/unocss#using-presets
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives(), transformerVariantGroup()]
});
