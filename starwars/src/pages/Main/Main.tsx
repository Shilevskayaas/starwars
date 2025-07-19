import { NavLink } from 'react-router-dom'
import yoda from '../../img/yoda.png';
import cloud from '../../img/cloud.svg';
import { StyledMain } from './styled';

function Main() {
  return (
    <StyledMain>
      <div>
        <div>
          <h1>Find all your favorite character</h1>
          <p>You can find out all the information about your favorite characters</p>
          <button>
            <NavLink to="/character">
              <button>
                <a href="#" target='_blank'>See more...</a>
              </button>
            </NavLink>
            
          </button>
        </div>
        <div>
          <img src={cloud} alt="cloud" className='cloud_big' />
          <img src={cloud} alt="cloud" className='cloud_small' />
          <img src={yoda} alt="Yoda" className='yoda'/>
        </div>
      </div>
    </StyledMain>
  )
}

export default Main