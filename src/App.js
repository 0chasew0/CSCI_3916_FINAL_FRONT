import React from 'react';
import './App.css';
import ShopHeader from './components/shopheader';
import ItemList from './components/itemlist';
import Item from './components/item';
import Authentication from './components/authentication';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <ShopHeader />
            <Route exact path="/" render={()=><ItemList />}/>
            <Route exact path="/item" render={()=><ItemList />}/>
            <Route exact path="/item/:item_id" render={()=><Item />}/>
            <Route path="/signin" render={()=><Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
