/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true
	},
	basePath: '/HaikuHelper',
	assetPrefix: '/HaikuHelper/'
}
module.exports = nextConfig