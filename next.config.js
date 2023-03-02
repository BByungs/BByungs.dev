const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['github.com'],
  },
});
