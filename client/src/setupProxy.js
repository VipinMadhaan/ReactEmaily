const proxy = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://centoslocal.com:5000', }));
  app.use(proxy('/api/**', { target: 'http://centoslocal.com:5000' }));
};