import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { getCountriesQuery } from '../../graphql/queries.js';

interface Country {
  name: string;
}

export const CountryList = () => {
  const { data } = useQuery(getCountriesQuery);
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    if (data) {
      setCountries(data.Country);
    }
  }, [data]);

  console.log(countries);

  return (
    <div>
      {' '}
      {countries.map((country) => (
        <h1>
          {country.name}
        </h1>
      ))}
    </div>
  );
};
