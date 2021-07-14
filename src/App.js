import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import NavBar from './components/navBar/NavBar'
import RandomCharacters from './pages/randomCharacters/RandomCharacters'
import Search from './pages/search/Search';
import SearchDetail from './pages/searchDetail/SearchDetail';
import BackSearch from './components/backSearch/BackSearch';
import React, {useState, createContext} from 'react'
import {BackContext} from './components/context/BackContext'

function App() {

  const [category, setCategory] = useState()

  return (
    <BackContext.Provider value={{category, setCategory}}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/random-characters'>
          <RandomCharacters />
        </Route>

        <Route exact path='/search'>
          <Search />
        </Route>

        <Route exact path='/search/:id'>
          <BackSearch />
          <SearchDetail />
        </Route>

        <Route exact path='/random-characters/:id'>
          <BackSearch />
          <SearchDetail />
        </Route>
      </Switch>
    </Router>
    </BackContext.Provider>
  );
}

export default App;
