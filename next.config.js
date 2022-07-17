// next.config.js
// module.exports = {
//   // experimental: {
//   //   // Enables the styled-components SWC transform
//   //   styledComponents: true
//   // }
// }

const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))

    return config
  }
}
