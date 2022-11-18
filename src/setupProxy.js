const { createProxyMiddleware } = require('http-proxy-middleware');

//CORS 관련 오류를 방지 위해 proxy 를 설정
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};