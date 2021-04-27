import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./loading/loading";

const RobotFullInfo = (props) => {
  let [friendsFullInfo, setFriendFullInfo] = useState([]);

  useEffect(function () {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        const friendsData = data.map((robotPersonal) => {
          return {
            id: robotPersonal.id,
            name: robotPersonal.name,
            username: robotPersonal.username,
            email: robotPersonal.email,
            street: robotPersonal.address.street,
            city: robotPersonal.address.city,
            zipcode: robotPersonal.address.zipcode,
            phone: robotPersonal.phone,
            website: robotPersonal.website,
            companyName: robotPersonal.company.name,
            companyCatchPhrase: robotPersonal.company.CatchPhrase,
            companyBs: robotPersonal.company.bs,
          };
        });
        setFriendFullInfo(friendsData);
      });
  }, []);

  const getById = () => {
    return friendsFullInfo.find((friend) => {
      //   console.log(typeof props.match.params.id);
      return friend.id === Number(props.match.params.id);
    });
  };

  if (friendsFullInfo.length === 0) {
    return <Loading />;
  } else {
    return (
      <div className="friend-card friend-card-full">
        <div>
          <img
            src={`https://robohash.org/${getById().id + 10}`}
            alt={`Mon ami ${getById().name}`}
          />
        </div>
        <div className="friend-card-full-info">
          <h1>{getById().name}</h1>
          <p>Username : {getById().username}</p>
          <p>E-mail : {getById().email}</p>
          <p>Street : {getById().street}</p>
          <p>City : {getById().city}</p>
          <p>Zipcode : {getById().zipcode}</p>
          <p>Phone: {getById().phone}</p>
          <p>Site web : {getById().website}</p>
          <p>Company Name : {getById().companyName}</p>
          <p>Company Catch Phrase : {getById().companyCatchPhrase}</p>
          <p>Company Bs : {getById().companyBs}</p>
          <Link className="friend-full-info-link" to="/">
            Voir tous mes amis
          </Link>
        </div>
      </div>
    );
  }
};
export default RobotFullInfo;
