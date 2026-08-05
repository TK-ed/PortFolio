const nextConfig = {
	output: "export",

	turbopack: {},

	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets-global.website-files.com",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
	},

	webpack(config, { isServer }) {
		config.optimization.minimize = false;

		config.module.rules.push({
			test: /\.graphql$/,
			exclude: /node_modules/,
			use: [{ loader: "graphql-tag/loader" }],
		});

		if (!isServer) {
			config.optimization.minimizer = config.optimization.minimizer.map(
				(plugin) => {
					if (plugin.constructor.name === "TerserPlugin") {
						plugin.options.terserOptions = {
							...plugin.options.terserOptions,
							keepClassnames: true,
							keepFnames: true,
						};
					}

					return plugin;
				},
			);
		}

		return config;
	},
};

module.exports = nextConfig;
