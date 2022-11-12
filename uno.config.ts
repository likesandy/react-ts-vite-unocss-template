import {
  presetAttributify,
  transformerAttributifyJsx,
  defineConfig,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  transformers: [transformerAttributifyJsx()],
});
