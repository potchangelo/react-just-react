import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

function AppHeader() {
  return (
    <header className="app-header">
      <NavLink className="app-header-item" to="/" activeClassName="app-header-item-active" exact>
        Homepage
      </NavLink>
      <NavLink className="app-header-item" to="/about" activeClassName="app-header-item-active">
        About
      </NavLink>
    </header>
  );
}

export default AppHeader;
