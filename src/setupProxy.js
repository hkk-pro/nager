const proxy = require('http-proxy-middleware');
var cors = require('cors')

module.exports = app => {
  app.use(
    '/AvailableCountries',
    proxy({
      target: 'https://date.nager.at/Api/v2',
      changeOrigin: true
    })
  );
  app.use(cors())
};

// https://date.nager.at/Api/v2/AvailableCountries
