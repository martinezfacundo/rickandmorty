import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import NavBar from './components/navBar/NavBar'
import RandomCharacters from './pages/randomCharacters/RandomCharacters'
import Search from './pages/search/Search';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/random-characters'>
          <RandomCharacters />
        </Route>

        <Route exact path='/search-characters'>
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
