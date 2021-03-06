const path = require('path');
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
*/
  cssModules: true,
});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['d2lfdrnysfmya6.cloudfront.net'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
