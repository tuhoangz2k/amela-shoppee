import React from 'react';
import './App.css';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useRouteElement from 'hooks/useRouteElement';
import { colors } from 'constants/index';
function App() {
  const elements = useRouteElement();
  return (
    <div style={{ color: colors.textColor }} className="App">
      {elements}
      <ToastContainer />
    </div>
  );
}

export default App;
