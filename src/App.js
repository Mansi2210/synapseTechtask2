import React from 'react';
import './App.css';
import Nav from './components/Nav';
import {useState} from 'react';
import News from './components/Newscontent/News';
import axios from 'axios';
import {useEffect} from 'react';

function App() {
  const [cat, setcat] = useState("general")
  const [NewsArray, setNewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const api = async () =>
  {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ac028c3b754d474dab9b06d4732b3687&catergory=${cat}`);
      setNewsArray(news.data.articles);
      setnewsResults(news.data.totalResults);
    }catch(error){
      console.log(error);
    }
  console.log(NewsArray);

  };
   useEffect(() => {
    api();
   }, [newsResults,cat]);
   
  
  return (
    <div className="App">
      <Nav setCat={setcat}></Nav>
      <News NewsArray={NewsArray} newsResults={newsResults}></News>
    </div>
  );
}

export default App;
