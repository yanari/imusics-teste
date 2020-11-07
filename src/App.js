import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { login } from './api';

import Home from './pages/Home';
import Create from './pages/Create';
import Tickets from './pages/Tickets';
import Ticket from './pages/Tickets/Ticket';

import Header from './components/Header';

import { StyledContainer } from './styles';

function App() {
  useEffect(() => {
    login();
  }, []);

  return (
    <>
      <Header/>
      <StyledContainer>
        <Switch>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/tickets/:id">
            <Ticket/>
          </Route>
          <Route path="/tickets">
            <Tickets/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </StyledContainer>
    </>
  );
}

export default App;
