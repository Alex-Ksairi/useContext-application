// styling
import './App.css';

// components
import Sign from './pages/SignIn/SignIn';
import HomePage from './pages/HomePage/HomePage';

// Switch & Route
import { Switch, Route } from "../node_modules/react-router-dom";

function App() {
  return (
    <div className="App">
    <h1>useContext, Provider</h1>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/sign'>
          <Sign />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
