import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Tickets from './pages/Tickets';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/tickets">
          <Tickets/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
