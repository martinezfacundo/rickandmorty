import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import NavBar from './components/navBar/NavBar'
import Characters from './pages/randomCharacters/RandomCharacters'
import SearchCharacters from './pages/searchCharacters/SearchCharacters';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/random-characters'>
          <Characters />
        </Route>

        <Route exact path='/search-characters'>
          <SearchCharacters />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
