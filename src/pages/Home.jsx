import React from "react";

const Home = ({ count }) => {
  return <>Home {count}</>;
};

export default React.memo(Home);
