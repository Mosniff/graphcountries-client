import { gql } from '@apollo/client';

export const getCountriesQuery = gql`
  query countries {
  Country {
    name
    nativeName
    capital
    officialLanguages {
      name
      nativeName
    }
    flag {
      emoji
    }
  }
}
`;
