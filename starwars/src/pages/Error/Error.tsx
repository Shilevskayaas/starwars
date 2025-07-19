import { NavLink } from 'react-router-dom'
import planet from '../../img/planet.png';
import { StyledError } from './styled';


function Error() {
  return (
    <StyledError>
      <div>
        <div>
          <div>language: en</div>
          <div>
            <img src={planet} alt="Planet"/>
          </div>
          <div></div>
        </div>
        <NavLink to="/">
          <button type='button'>
            <a href="/main" target="_blank">Return</a>
          </button>
        </NavLink>
      </div>
    </StyledError>
  )
}

export default Error