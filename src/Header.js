import React from 'react';
import './App.css';

export default function Header() {
  return (
    <div className="jumbotron jumbotron-fluid bg mb-0">
      <h1 className="display-4 pl-5">WorldWide Public Holiday</h1>
    </div>
  );
}


// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//   app.use(
//     proxy("/AvailableCountries",{
//       target:"https://date.nager.at/Api/v2",
//       secure:false,
//       changeOrigin:true
      
//     })
//   );
// };
