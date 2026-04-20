module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,         // Check for changes every second
      aggregateTimeout: 300,
      ignored: ['**/node_modules', '/data/data', '/data', '/'],
    };
    return config;
  },
};