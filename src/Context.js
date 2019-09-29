import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryContext = React.createContext();

function CountryProvider(props) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchCountries();
    setLoading(false);
  }, []);

  let fetchCountries = async () => {
    try {
      let countryNames = await axios.get('/AvailableCountries');
      setCountries(countryNames.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = e => {
    setInputValue(e.target.value);
  };
  return (
    <CountryContext.Provider
      value={{ countries, loading, inputValue, handleInput }}
    >
      {props.children}
    </CountryContext.Provider>
  );
}

export { CountryProvider, CountryContext };
