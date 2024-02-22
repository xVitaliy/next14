import { gql } from '@apollo/client';

export const COUNTRIES = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      capital
      code
      name
      currencies
      currency
    }
  }
`;
