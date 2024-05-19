import "./card.css";
import BgIcon from "../../../public/assets/icons/card-icon.svg";
import PropTypes from "prop-types"
export const Card = (isCardInfo) => {
 const{name,cardNumber,CVC,month,year} =isCardInfo.isCardInfo
  return (
    <div className="wrapper">
      <div className="cards cardOne">
        <div className="icons">
            <div className="circleOne"></div>
            <div className="circleTwo"></div>
        </div>
    <h1 className="cardNumber">{isCardInfo.isCardInfo?.cardNumber?cardNumber:"0000 0000 0000 0000"}</h1>
    <div className="wrap">
        <h2 className="userName">{isCardInfo.isCardInfo?.name?name:"JANE APPLESEED"}</h2>
        <p className="data">{month??"00"}/{year??"00"}</p>
    </div>
      </div>
      <div className="cards cardTwo">
        <div className="bgPatternOne"></div>
        <div className="bgPatternTwo">
          <p>{CVC??"000"}</p>
        </div>
        <div className="icon">
          <BgIcon />
        </div>
      </div>
    </div>
  );
};

Card.propTypes={
  IsCardInfo:PropTypes.object
}