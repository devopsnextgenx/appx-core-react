const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user-auth-api',
    createProxyMiddleware({
      target: 'https://appx.localtest.me:2001',
      changeOrigin: true,
      secure: false
    })
  );
  app.use(
    '/products-api',
    createProxyMiddleware({
      target: 'https://appx.localtest.me:2010',
      changeOrigin: true,
      secure: false
    })
  );
};