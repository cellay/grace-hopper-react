import React from 'react';
import ReactDOM from 'react-dom';

function Header ({title}) {
  return <header><h1>{title}</h1><hr></hr></header>
};

const fill = {
  title : 'Grace Hopper'
};

ReactDOM.render (
  < Header {...fill}/>,
  document.getElementById('root')
)