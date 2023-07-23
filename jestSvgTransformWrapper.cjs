// in <rootDir>/jestSvgTransformerWrapper.js
const svgJest = require('svg-jest')

module.exports = {
  process(...args) {
    return {
      code: svgJest.process(...args),
    }
  },
}
