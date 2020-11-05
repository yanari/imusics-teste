import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Tickets from './pages/Tickets';

import Header from './components/Header';
import { StyledContainer } from './styles';

function App() {
  return (
    <>
      <Header/>
      <StyledContainer>
        <Switch>
          <Route path="/create">
            <Create/>
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
