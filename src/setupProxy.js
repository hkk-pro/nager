const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy("/AvailableCountries",{
      target:"https://date.nager.at/Api/v2",
      secure:false,
      changeOrigin:true
      
    })
  );
};
