import planet from '../../img/planet.png';
import { StyledError } from './styled';
import Main from '../Main/Main';


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
        <button type='button'>
          <a href={<Main/>} target="_blank">Return</a>
        </button>
      </div>
    </StyledError>
  )
}

export default Error