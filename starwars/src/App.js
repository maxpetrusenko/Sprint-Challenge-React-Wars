import React,{ useState, useEffect } from "react";
import './App.css';
import Character from './components/Character';
import axios from "axios"
import SearchBar from "./components/SearchBar";


const App = () => {
  const [cards,setQuery] = useState([]);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((response)  =>{
        console.log(response.data.results)
        setQuery(response.data.results);
    })
    .catch((error)=>{
        console.log(error)
    })
},[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="cards">
        <SearchBar 
          characters={cards}
        ></SearchBar>
        {}
        {/* {cards.map((card,index)=>{
          return <Character 
                    key={index} 
                    name={card.name} 
                    url={card.image}
                    location={card.location.name}
                    ></Character>
          })} */}
      </div>
    </div>
  );
}

export default App;
