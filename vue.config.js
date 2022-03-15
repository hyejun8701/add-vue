// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  outputDir: '../main/resources/static',

  devServer : {
    port: 3030,
    proxy: {
      '/api': {
        target: 'http:localhost:8080',
        changeOrigin: true
      }
    }

  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
}
