import Card from "./Card";

const CardList = (props) => {
  return (
    <div className="friend-card-container">
      {props.robotFriendList.map(({ id, name, email }, index) => {
        return (
          <Card
            key={index}
            id-content={index}
            id={id}
            names={name}
            alternative={`Mon ami ${name}`}
            url={`https://robohash.org/${id + 10}`}
            email={email}
            /*viewFullContact={props.viewFullContact}*/
          />
        );
      })}
    </div>
  );
};

export default CardList;
