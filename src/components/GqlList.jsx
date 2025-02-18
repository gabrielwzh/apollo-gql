import React from "react";
import { useCharacters } from "../hooks/useCharacters";

const GqlList = () => {
  const { error, loading, data } = useCharacters();
  console.log({ error, loading, data });
  if (loading) return "loading gql...";
  if (error) return "error";
  return (
    <>
      {data?.characters?.results?.map((char, idx) => {
        return (
          <div key={`${char.name}_${idx}`}>
            <span>{char.name}</span>
            <img src={char.image} />
          </div>
        );
      })}
    </>
  );
};

export default GqlList;
