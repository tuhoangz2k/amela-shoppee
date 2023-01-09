import React from 'react';
import logo from './logo.svg';
import './App.css';
import useRouteElement from 'hooks/useRouteElement';
function App() {
  const elements = useRouteElement();
  return <div className="App">{elements}</div>;
}

export default App;
