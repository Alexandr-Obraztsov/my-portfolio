import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyled} from "./styles/Global.styled";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
      <GlobalStyled/>
  </React.StrictMode>
);
