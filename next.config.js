const withInterceptStdout = require('next-intercept-stdout')

module.exports = withInterceptStdout(
  {
    reactStrictMode: true,
    compiler: {
      emotion: true,
    },
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text)
)
