import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import yoda from "../../img/yoda.png";
import cloud from "../../img/cloud.svg";
import { StyledMain } from "./styled";

export default function Main() {
  return (
    <div className="page-container">
      <Header />
      <StyledMain>
        <div>
          <div>
            <h1>Find all your favorite character</h1>
            <p>You can find out all the information about your favorite characters</p>
            <Button 
              to="/character" 
              className="button-main"
              children="See more..."
            >
            </Button>
          </div>
          <div>
            <img src={cloud} alt="cloud" className="cloud-big" />
            <img src={cloud} alt="cloud" className="cloud-small" />
            <img src={yoda} alt="Yoda" className="yoda"/>
          </div>
        </div>
      </StyledMain>
    </div>
  )
}