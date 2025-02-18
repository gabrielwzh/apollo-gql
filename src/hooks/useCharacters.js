import { useQuery, gql } from "@apollo/client";

const get_char = gql`
  query {
    characters {
      results {
        name
        id
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, loading, data } = useQuery(get_char);
  return { error, loading, data };
};
