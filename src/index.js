import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
        <Provider store={store}>
      {/* <PersistGate loading={null}  persistor={persistor}> */}
          <App />
      {/* </PersistGate > */}
      </Provider>
    </BrowserRouter>    
  </React.StrictMode>,
  // document.getElementById('root')
);
