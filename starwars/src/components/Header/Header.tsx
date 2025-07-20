import { NavLink } from "react-router-dom"
import logo from "../../img/logo.png";
import { StyledHeader } from "./styled";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <NavLink to="/">
          <img src={logo} alt="StarWars" />
        </NavLink>
        <div>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/character"
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Characters
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  )
}