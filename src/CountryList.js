import React, { useContext } from 'react';
import { CountryContext } from './Context';

export default function CountryList() {
  const context = useContext(CountryContext);
  const { countries, inputValue } = context;
  let search = inputValue.toLowerCase();
  let filteredCountries = countries.filter(country => {
    return (
      country.value.toLowerCase().includes(search) ||
      country.key.toLowerCase().includes(search)
    );
  });

  return (
    <>
      <ul className="list-group">
        {filteredCountries.length > 0 ? (
          filteredCountries.map(name => {
            return (
              <li
                key={name.key}
                className="list-group-item list-group-item-action text-primary"
              >
                {name.value} ({name.key})
              </li>
            );
          })
        ) : (
          <div className="p-3"> No country found</div>
        )}
      </ul>
    </>
  );
}
