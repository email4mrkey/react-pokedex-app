import React, { Component } from 'react';
import '.Pokecard.css';

class Pokecard extends Component {
    render(){
        return (
            <div>
                <h2>Name</h2>
                <img src="#" alt="Pokecard" />
                <p>Type</p>
                <p>Experience</p>
            </div>
        );
    }
}

export default Pokecard;
