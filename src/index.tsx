import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {store} from "./app/store/store";
import {GlobalStyle} from "./styles/Global.styles";
import {BrowserRouter} from "react-router-dom";
import {ThemeContextProvider} from "./app/ThemeContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeContextProvider>
        <App/>
      </ThemeContextProvider>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
