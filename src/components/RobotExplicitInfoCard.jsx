import { Link } from "react-router-dom";
import LoadingAnimation from "./loading/loading";

const renderRobotFullInfo = (props) => {
  const friendsData = props.robotFriendFullInfo.map(({ id, name, username, email, address: { street, city, zipcode }, phone, website, company }) => {
    return {
      id,
      name,
      username,
      email,
      street,
      city,
      zipcode,
      phone,
      website,
      company,
    };
  });

  const getRobotById = () => {
    return friendsData.find((friend) => {
      return friend.id === Number(props.match.params.id);
    });
  };

  if (friendsData.length === 0) {
    return <LoadingAnimation />;
  } else {
    return (
      <div className="friend-card friend-card-full">
        <div>
          <img src={`https://robohash.org/${getRobotById().id + 10}`} alt={`Mon ami ${getRobotById().name}`} />
        </div>
        <div className="friend-card-full-info">
          <h1>{getRobotById().name}</h1>
          <p>Username : {getRobotById().username}</p>
          <p>E-mail : {getRobotById().email}</p>
          <p>Street : {getRobotById().street}</p>
          <p>City : {getRobotById().city}</p>
          <p>Zipcode : {getRobotById().zipcode}</p>
          <p>Phone: {getRobotById().phone}</p>
          <p>Site web : {getRobotById().website}</p>
          <p>Company Name : {getRobotById().company.name}</p>
          <p>Company Catch Phrase : {getRobotById().company.CatchPhrase}</p>
          <p>Company Bs : {getRobotById().company.bs}</p>
          <Link className="friend-full-info-link" to="/">
            Voir tous mes amis
          </Link>
        </div>
      </div>
    );
  }
};
export default renderRobotFullInfo;
