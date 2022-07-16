module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/global-variable.scss";`
      }
    }
  }
}