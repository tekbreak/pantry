import React from 'react';
import ReactDOM from 'react-dom';


import {items, categories} from './data.js';
import Pantry from './Pantry';

ReactDOM.render(
  <Pantry items={items} categories={categories} />,
  document.getElementById('root')
);
