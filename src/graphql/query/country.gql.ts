import { gql } from '@apollo/client';

export const COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      awsRegion
      capital
      code
      continent {
        code
        name
      }
      currencies
      currency
      emoji
      emojiU
      languages {
        code
        name
        native
        rtl
      }
      name
      native
      phone
      phones
      states {
        code
        country {
          awsRegion
          capital
          code
          currencies
          currency
          emoji
          emojiU
          name
          native
          phone
          phones
        }
        name
      }
      subdivisions {
        code
        emoji
        name
      }
    }
  }
`;
