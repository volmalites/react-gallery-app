/**
* Main navigation
**/

import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/page/renoster">Renoster</NavLink>
        </li>
        <li>
          <NavLink to="/page/meerkat">Meerkat</NavLink>
        </li>
        <li>
          <NavLink to="/page/boomslang">Boomslang</NavLink>
        </li>
        <li>
          <NavLink to="/page/leeu">Leeu</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
