import React from 'react';
import './App.css';
import 'normalize.css';
import useRouteElement from 'hooks/useRouteElement';
function App() {
  const elements = useRouteElement();
  return <div className="App">{elements}</div>;
}

export default App;
