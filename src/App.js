import React {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import { Component } from 'react';


const state = {
    robot: robots,
    searchfield: ''
}

class App extends Component {
    render() {
        return(
            <div className= 'tc'> 
                <h1> RoboFriends</h1>
                <SearchBox />
                <CardList robots = {robots}/>
            </div>
          
        );
    }
    
}

export default App;