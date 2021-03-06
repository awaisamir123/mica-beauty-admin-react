import React from 'react';
import {Routes} from './components/routing/Routes'
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
       <Routes/>
    </Provider>
  );
}

export default App;
