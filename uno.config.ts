import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetAttributify(), presetTagify()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
