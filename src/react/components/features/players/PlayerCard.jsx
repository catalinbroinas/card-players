import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

function PlayerCard({ imageUrl, name, team, createdAt, updatedAt }) {
  const status = updatedAt ? 'Updated' : 'Added';
  const lastDate = updatedAt || createdAt;

  return (
    <div className="card card-player">
      <div className="card-image">
        <img src={imageUrl} alt={`Photo of ${name}`} className="img-fluid" />
        <div className="mask mask-light"></div>
      </div>

      <div className="card-header text-center">
        <h2 className="card-title">{name}</h2>
        <h3 className="card-subtitle">{team}</h3>
      </div>

      <div className="card-body">
        <p className="card-text">
          <FontAwesomeIcon icon={faFile} className="me-2" />
          {status}
        </p>

        <p className="card-text">
          <FontAwesomeIcon icon={faCalendarDay} className="me-2" />
          {lastDate}
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
