module.exports = {
    mode : "jit",
    purge: {
      content: ["./src/**/*.svelte"],
    },
    theme: {
      extend: {
        colors: {
          orange: {
            500: "#ff3e00",
          },
        },
      },
    },
    variants: {},
    plugins: [],
  };