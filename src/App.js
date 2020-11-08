import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { login } from './api';

import Home from './pages/Home';
import Create from './pages/Create';
import Tickets from './pages/Tickets';
import TicketPage from './pages/Tickets/Ticket';

import Header from './components/Header';

import {
  StyledContainer,
  StyledLoadingIcon,
} from './styles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const handleLogin = async () => {
      const loggedIn = await login();
      setIsLoggedIn(loggedIn);
    };
    handleLogin();
  }, []);

  return (
    <>
      <Header/>
      <StyledContainer>
        {isLoggedIn ? (
          <Switch>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/tickets/:id">
              <TicketPage/>
            </Route>
            <Route path="/tickets">
              <Tickets/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        ) : (
          <StyledLoadingIcon/>
        )}
      </StyledContainer>
    </>
  );
}

export default App;
