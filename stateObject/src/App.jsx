import React from "react";
import ProfileImage from "./assets/aiProfile.jpg";
import starFav from "./assets/starFav.jpg";
import starUnFav from "./assets/starUnFav.jpg";
import "./AppStyling.css";

function App() {
  return (
    <div>
      <main>
        <article>
          <img src={ProfileImage}></img>
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
