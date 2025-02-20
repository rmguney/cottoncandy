/** @type {import('next').NextConfig} */
module.exports = {
  // Clean CSS module cache during development
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}
