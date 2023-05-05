import { React, useEffect } from "react";
// 4c1c6ebf  {api key}

// API url + API key
const API_URL = "http://www.omdbapi.com/?apikey=4c1c6ebf";
const App = () => {
  const sreachMoives = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    sreachMoives("god");
  }, []);
  return (
    <>
      <h1>hello</h1>
      <h1>hello</h1>
    </>
  );
};
export default App;
