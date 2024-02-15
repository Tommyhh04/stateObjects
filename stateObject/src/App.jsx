import React from "react";
import ProfileImage from "./assets/aiProfile.jpg";
import starFav from "./assets/starFav.jpg";
import starUnFav from "./assets/starUnFav.jpg";
import "./AppStyling.css";

function App() {
  //Contains various information about person
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "445-555-202",
    email: "myemail@adress.com",
    isFavorite: false,
  });

  return (
    <div>
      <main>
        {/*Profile picture*/}
        <img src={ProfileImage}></img>
        <article>
          {/*Displays various information for the person*/}
          <h2>John Doe</h2>
          <img className="favorite" src={starUnFav} />
          <p>445-555-202</p>
          <p>myemail@adress.com</p>
        </article>
      </main>
    </div>
  );
}

export default App;
