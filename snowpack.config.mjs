

const production = process.env.NODE_ENV === 'production'

function babelOptions() {
  return {
    plugins: production
      ? ['transform-remove-console']
      : []
  }
}

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize',  
    ['@snowpack/plugin-babel', {
      transformOptions: babelOptions()
    }],
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? {tsc: 'yarn pnpify tsc'} : {}),
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  alias: {
    '@': './src'
    // '~': './src'
  },
  devOptions: {
      //port: 8080,
      open: 'none'	
  },
  buildOptions: {
    /* ... */
  },
};
