import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      className="friend-card friend-card--size" /*onClick={props.viewFullContact}*/
    >
      <div>
        <img className="friend-image" src={props.url} alt={props.alternative} />
      </div>
      <h2 className="friend-name">{props.names}</h2>
      <p className="friend-email">{props.email}</p>
      <Link className="friend-full-info-link" to={`/robot/${props.id}`}>
        Voir Plus d'info
      </Link>
    </div>
  );
};

export default Card;
