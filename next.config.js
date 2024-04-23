module.exports = {
	images: {
		unoptimized: true,
		domains: [
			'res.cloudinary.com',
			'avatars.githubusercontent.com',
			'imgur.com',
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.graphql$/,
			exclude: /node_modules/,
			use: [{loader: 'graphql-tag/loader'}],
		});

		return config;
	},
};
