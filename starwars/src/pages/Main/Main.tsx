import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import yoda from "../../img/yoda.png";
import cloud from "../../img/cloud.svg";
import { StyledMain } from "./styled";

export default function Main() {
  return (
    <div className="page">
      <Header />
      <StyledMain>
        <div>
          <div>
            <h1>Find all your favorite character</h1>
            <p>You can find out all the information about your favorite characters</p>
            <Button 
              to="/character" 
              className="main_button"
              children="See more..."
            >
            </Button>
          </div>
          <div>
            <img src={cloud} alt="cloud" className="cloud_big" />
            <img src={cloud} alt="cloud" className="cloud_small" />
            <img src={yoda} alt="Yoda" className="yoda"/>
          </div>
        </div>
      </StyledMain>
    </div>
  )
}