import { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import { octadeskApi } from './api';

import Create from './pages/Create';
import Tickets from './pages/Tickets';
import TicketPage from './pages/TicketPage';

import Header from './components/Header';

import {
  StyledContainer,
  StyledLoadingIcon,
} from './styles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const handleLogin = async () => {
      const loggedIn = await octadeskApi.login();
      setIsLoggedIn(loggedIn);
    };
    handleLogin();
  }, []);

  return (
    <IntlProvider locale="pt-BR">
      <Header/>
      <StyledContainer>
        {isLoggedIn ? (
          <Switch>
            <Route path="/tickets/:id">
              <TicketPage/>
            </Route>
            <Route path="/tickets">
              <Tickets/>
            </Route>
            <Route path="/">
              <Create/>
            </Route>
          </Switch>
        ) : (
          <StyledLoadingIcon/>
        )}
      </StyledContainer>
    </IntlProvider>
  );
}

export default App;
