import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";  // Change BrowserRouter to HashRouter
import { Provider } from 'react-redux';
import { store } from './store/store';
import ThemeContext from "./context/ThemeContext"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router> {/* Changed BrowserRouter to HashRouter */}
        <ThemeContext>
          <App />
        </ThemeContext>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
