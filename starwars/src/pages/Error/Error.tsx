import { NavLink } from 'react-router-dom'
import planet from '../../img/planet.png';
import { StyledError } from './styled';


export default function Error() {
  return (
    <div className='page'>
      <StyledError>
        <div>
          <div>
            <div className='number'>4</div>
            <div className='planet'>
              <img src={planet} alt="Planet"/>
            </div>
            <div className='number'>4</div>
          </div>
          <NavLink to="/" className='return_button'>Return</NavLink>
        </div>
      </StyledError>
    </div>
  )
}