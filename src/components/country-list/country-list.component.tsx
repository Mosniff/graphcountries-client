import React, { useEffect, useState } from 'react';
import './country-list.styles.css';
import { useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import { getCountriesQuery } from '../../graphql/queries.js';
import { CountryCard } from '../country-card';

export interface LanguageType {
  name: string;
  nativeName: string;
}

export interface CountryType {
  name: string;
  nativeName: string;
  capital: string;
  flag: any;
  officialLanguages: LanguageType[];
}

export const CountryList = () => {
  const { data } = useQuery(getCountriesQuery);
  const [countries, setCountries] = useState<CountryType[]>([]);
  useEffect(() => {
    if (data) {
      setCountries(data.Country);
    }
  }, [data]);

  console.log(countries[0]);

  const getCountries = () => {
    const rows = [];
    for (let i = 0; i < countries.length; i += 3) {
      rows.push(
        <Grid
          container
          item
          direction="row"
          justifyContent="center"
          xs={12}
          spacing={3}
          className="country-card-row"
        >
          {countries.slice(i, i + 3).map((country: any) => (
            <Grid
              item
              xs={4}
              className="country-card-container"
            >
              <CountryCard
                name={country.name}
                nativeName={country.nativeName}
                capital={country.capital}
                flag={country.flag}
                officialLanguages={country.officialLanguages}
              />
            </Grid>
          ))}
        </Grid>,
      );
    }

    return rows;
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={10}
      >
        {getCountries()}
      </Grid>
    </>
  );
};
