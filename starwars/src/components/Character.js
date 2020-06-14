// Write your Character component here
import React, {useState,useEffect} from 'react';
import './Character.css';

function Character({name,url,location}) {

    return (
        <div className="cards">
            <div className="card">
                <div className="card__image-holder">
                    <img className="card__image" src={url} alt="wave" />
                </div>
                <div className="card-title">
                <h2>{name}<small>{location}</small></h2>
            </div>
        </div>
        </div>
    )
}

export default Character