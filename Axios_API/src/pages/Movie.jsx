import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card"; // Ensure the path to Card.jsx is correct


function Movie() {
    const [data, setData] = useState([]);
  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=9f67eb48";
  
  const getMovieData = async () => {
    try {
      // Pass the API key and any other parameters as query params
      const res = await axios.get(API)
      console.log(res.data.Search); 
      setData(res.data.Search);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      console.error("Error fetching data:", error.response.status);
      console.error("Error fetching data:", error.response.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return 
  <ul>
    {
        data.map( (item) => {
            return <Card key={curElem.imdbID} 
            movieData={curElem} />;
        })
    }
  </ul>
  ;
}

export default Movie;
