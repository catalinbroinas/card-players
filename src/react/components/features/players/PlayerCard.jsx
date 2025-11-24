import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import declanRice from "../../../../assets/images/players/rice.webp";

function PlayerCard() {
  return (
    <div className="card card-player">
      <div className="card-image">
        <img src={declanRice} alt="" className="img-fluid" />
        <div className="mask mask-light"></div>
      </div>

      <div className="card-header text-center">
        <h2 className="card-title">Declan Rice</h2>
        <h3 className="card-subtitle">Arsenal</h3>
      </div>

      <div className="card-body">
        <p className="card-text">
          <FontAwesomeIcon icon={faFile} className="me-2" />
          Added
        </p>

        <p className="card-text">
          <FontAwesomeIcon icon={faCalendarDay} className="me-2" />
          04 November 2025
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
