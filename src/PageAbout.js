import { Link, Redirect, Route, Switch } from 'react-router-dom';
import LayoutPage from './LayoutPage';

function PageAbout() {
  return (
    <LayoutPage>
      <h2>About เกี่ยวกับเรื่องของหมู่เฮา</h2>
      <p>
        <Link to="/about/myself">Myself</Link>
      </p>
      <p>
        <Link to="/about/history">History</Link>
      </p>
      <Switch>
        <Route path="/about/myself">
          <h3>Myself</h3>
          <p>เรื่องของผม</p>
        </Route>
        <Route path="/about/history">
          <h3>History</h3>
          <p>อดีตช่างมัน ปัจจุบันช่างมั้ย ?</p>
        </Route>
        <Route path="/about">
          <Redirect to="/about/myself" />
        </Route>
      </Switch>
    </LayoutPage>
  );
}

export default PageAbout;
