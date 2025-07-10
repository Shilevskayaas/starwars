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
          <a href="#" target='_blank'>See more...</a>
        </div>
        <div>
          <img src={cloud} alt="cloud" />
          <img src={cloud} alt="cloud" />
          <img src={yoda} alt="Yoda" className='yoda'/>
        </div>
      </div>
    </StyledMain>
  )
}

export default Main