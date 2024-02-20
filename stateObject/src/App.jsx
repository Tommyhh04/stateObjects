import React from "react";
import ProfileImage from "./assets/aiProfile.jpg";
import starFav from "./assets/starFav.jpg";
import starUnFav from "./assets/starUnFav.jpg";
import "./AppStyling.css";

function App() {
  //Contains various information about person and stores it in a object
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "445-555-202",
    email: "myemail@adress.com",
    isFavorite: true,
  });

  //This ternary switches between favorite star or unfavorite star depending on the true or false state of isFavorite in contact object
  let starIcon = contact.isFavorite ? starFav : starUnFav;
  //This function toggles between the isFavorite states making it change to true or false using the "!" to make it change to the opposite of what the state already is
  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <div>
      <main>
        {/*Profile picture*/}
        <img src={ProfileImage}></img>
        <article>
          {/*Displays various information for the person*/}
          <h2>John Doe</h2>
          {/*Favorite button*/}
          <img className="favorite" src={starIcon} onClick={toggleFavorite} />
          <p>445-555-202</p>
          <p>myemail@adress.com</p>
        </article>
      </main>
    </div>
  );
}

export default App;
