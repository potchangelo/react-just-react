import { Route, Switch } from 'react-router-dom';
import AppHeader from './AppHeader';
import PageHome from './PageHome';
import PageAbout from './PageAbout';
import Page404 from './Page404';

function App() {
  return (
    <div>
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <PageHome />
        </Route>
        <Route path="/about">
          <PageAbout />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
