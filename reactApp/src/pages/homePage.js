import React from "react";
import "./homePage.css"


const HomePage = () => {

  return (
     <div className = "pageBanner">
         <h1 > Welcome to Movie Universe</h1>
         <h5>One Website for all your Movie Needs</h5>
         
        <img  src = {"https://res.cloudinary.com/dmikx06rt/image/upload/v1610138347/Assignment2%28web%29/movieUniverseIcon_igf3wk.png"}
             className = "pageLogo"
             alt={"Movie Universe"}>
        </img>

     </div>
  );
};

export default HomePage;