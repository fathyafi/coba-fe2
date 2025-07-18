const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://coba-be-fathyafi-dev.apps.rm1.0a51.p1.openshiftapps.com', // Ganti dengan URL API yang sesuai
        changeOrigin: true,
        secure: true, // Nonaktifkan verifikasi SSL jika diperlukan
        pathRewrite: {
          '^/api': '', // Jika perlu menghapus prefix '/api' dari URL yang diproksikan
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
});
