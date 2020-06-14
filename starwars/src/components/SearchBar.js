import React, {useState,useEffect} from 'react';
import './Character.css';
import Character from './Character';


const SearchBar = (props) =>{
    const [searchTerm, DOsearch] =useState("")
    const [filteredName, setFilteredName] = useState([])
    // console.log(props.characters)
    function search(e){
        DOsearch(e.target.value)
    }

    useEffect(()=>{
        const res = props.characters.filter((char)=>{
            // setFilteredName(char.name.include(searchTerm))
          return  char.name.includes(searchTerm)
        })
        setFilteredName(res);
    },[searchTerm])

    return (
        <div>
        <div className='search'>
            <span>Search: </span>
            <input value={searchTerm} onChange={search}></input>
        </div>
        <div className='cards'>
            {searchTerm === "" ?
            props.characters.map((char)=>{
                return <Character
                    key={char.index} 
                    name={char.name} 
                    url={char.image}
                    location={char.location.name}
                ></Character>
            }):filteredName.map((char)=>{
                return <Character
                    key={char.index} 
                    name={char.name} 
                    url={char.image}
                    location={char.location.name}
                ></Character>
            })
            }
        </div>
        </div>
    )
}
export default SearchBar