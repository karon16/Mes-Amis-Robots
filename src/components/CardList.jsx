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
            url={`https://robohash.org/${id}`}
            email={email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
