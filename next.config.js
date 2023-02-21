const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ['github.com'],
  },
});
