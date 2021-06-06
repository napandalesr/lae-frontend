const path = require('path');
const predeterminedRoute = path.resolve(__dirname, 'src');

module.exports = {
  webpack: {
    alias: {
      '@components-Project': `${predeterminedRoute}/components`,
      '@containers-Project': `${predeterminedRoute}/containers`,
      '@pages-Project': `${predeterminedRoute}/pages`,
      '@redux-Project': `${predeterminedRoute}/redux`,
      '@routes-Project': `${predeterminedRoute}/routes`,
      '@styles-Project': `${predeterminedRoute}/styles`,
      '@utils-Project': `${predeterminedRoute}/utils`,
      '@api-Project': `${predeterminedRoute}/api`,
      '@assets-Project': `${predeterminedRoute}/assets`,
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1'
      }
    }
  }
};