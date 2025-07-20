import Button from "../../components/Button/Button";
import planet from "../../img/planet.png";
import { StyledError } from "./styled";


export default function Error() {
  return (
    <div className="page-container">
      <StyledError>
        <div>
          <div>
            <div className="error-number">4</div>
            <div className="planet">
              <img src={planet} alt="Planet"/>
            </div>
            <div className="error-number">4</div>
          </div>
          <Button 
            to="/" 
            className="button-return"
            children="Return"
          >
        </Button>
        </div>
      </StyledError>
    </div>
  )
}