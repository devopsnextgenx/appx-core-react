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
  app.use(
    '/oauth2-api',
    createProxyMiddleware({
      target: 'https://react.appx.localtest.me:5000',
      changeOrigin: true,
      secure: false
    })
  );
};