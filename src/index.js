import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import registerServiceWorker from './reportWebVitals';
import 'tachyons';
import {robots} from './robots';

ReactDOM.render( 
        <cardList robots = {robots}/>
 ,document.getElementById('root')
);


registerServiceWorker();
