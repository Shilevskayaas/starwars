import logo from '../../img/logo.png';
//import Characters from '../Characters/Characters';
//import Main from '../Main/Main';
import { StyledHeader } from './styled';

function Header() {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="StarWars"/>
        <div>
          <ul>
            <li>
              <a href='/Main' target="_blank">Home</a>
            </li>
            <li>
              <a href='/Characters' target="_blank">Characters</a>
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header