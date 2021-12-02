const sveltePreprocess = require("svelte-preprocess");
const production = process.env.NODE_ENV === 'production'

function babelOptions() {
  return {
    plugins: production
      ? ['transform-remove-console']
      : []
  }
}

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: '@import "./src/scss/main.scss";'
    },
    postcss: {
      plugins: [
        require("tailwindcss"),
        require('autoprefixer')()
      ]
    },
    babel: babelOptions()
  })
}