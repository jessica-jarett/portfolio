module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/styles/main.scss";`
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/portfolio/'
      : '/'
};