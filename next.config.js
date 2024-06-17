module.exports = {
  images: {
    domains: [
      "assets-global.website-files.com",
      "avatars.githubusercontent.com",
    ],
  },
  webpack(config, { isServer }) {
    config.optimization.minimize = false;
    // Custom rule for .graphql files
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [{ loader: "graphql-tag/loader" }],
    });

    // Modify TerserPlugin settings
    if (!isServer) {
      config.optimization.minimizer = config.optimization.minimizer.map(
        (plugin) => {
          if (plugin.constructor.name === "TerserPlugin") {
            plugin.options.terserOptions = {
              ...plugin.options.terserOptions,
              // Add or modify Terser options as needed:
              keepClassnames: true,
              keepFnames: true,
            };
          }

          return plugin;
        }
      );
    }

    return config;
  },
};
