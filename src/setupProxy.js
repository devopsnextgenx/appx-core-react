const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/vapi',
    createProxyMiddleware({
      target: 'https://appx.localtest.me:2001',
      changeOrigin: true,
      secure: false
    })
  );
};