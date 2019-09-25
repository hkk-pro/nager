import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import Countries from './Countries';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <Countries />
    </React.Fragment>
  );
}

export default App;
