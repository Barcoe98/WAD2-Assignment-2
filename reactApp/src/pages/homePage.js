import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { withRouter} from "react-router-dom";

import "./homePage.css"


const HomePage = () => {
   const context = useContext(AuthContext);

  return context.isAuthenticated ? (
  
   <div className = "pageBanner">
         <h1>Welcome to Movie Universe</h1>
         <h4>Hi {context.userName}</h4>
         <h5>One Website for all your Movie Needs</h5>
         
        <img  src = {"https://res.cloudinary.com/dmikx06rt/image/upload/v1610138347/Assignment2%28web%29/movieUniverseIcon_igf3wk.png"}
             className = "pageLogo"
             alt={"Movie Universe"}>
        </img>

     </div>

  ) : (
  
   <div className = "pageBanner">
   <h1>Welcome to Movie Universe</h1>
   <h5>One Website for all your Movie Needs</h5>
   
  <img  src = {"https://res.cloudinary.com/dmikx06rt/image/upload/v1610138347/Assignment2%28web%29/movieUniverseIcon_igf3wk.png"}
       className = "pageLogo"
       alt={"Movie Universe"}>
  </img>

</div>

  );
};

export default withRouter(HomePage);