import React from 'react';
import './App.css';
import 'normalize.css';
import useRouteElement from 'hooks/useRouteElement';
import { colors } from 'constants/index';
function App() {
  const elements = useRouteElement();
  return (
    <div style={{ color: colors.textColor }} className="App">
      {elements}
    </div>
  );
}

export default App;
