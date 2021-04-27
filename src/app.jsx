import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import InputField from "./components/InputField";
import LoadingAnimation from "./components/loading/loading";
import CardList from "./components/CardList";
import RobotFullInfo from "./components/RobotFullInfo";
import "./style.css";

const App = () => {
  const [friends, setFiends] = useState([]);
  const [loading, setLoadinng] = useState(false);
  const location = useLocation();
  let [friendsTampon, setFiendsTampon] = useState(friends);

  useEffect(() => {
    setLoadinng(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // const friendFullData = data;
        const fiteredData = data.map(({ id, name, email }) => {
          return { id, name, email };
        });
        setLoadinng(false);
        setFiends(fiteredData);
        setFiendsTampon(fiteredData);
        // setFriendFullInfo(friendFullData);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const filteredFriendsList = friends.filter((friend) => {
      return friend.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFiendsTampon(filteredFriendsList);
  };

  const RenderCardList = () => {
    return <CardList robotFriendList={friendsTampon} />;
  };

  return (
    <div className="main">
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <h1 className="title">Mes Amis Robots</h1>
          {location.pathname === "/" && (
            <InputField
              type="search"
              placeholder="Rechercher par Noms"
              id="recherhe"
              handleChange={handleChange}
            />
          )}
          <Switch>
            <Route exact path="/" component={RenderCardList} />
            <Route path="/robot/:id" component={RobotFullInfo} />
          </Switch>
        </>
      )}
    </div>
  );
};

export default App;
