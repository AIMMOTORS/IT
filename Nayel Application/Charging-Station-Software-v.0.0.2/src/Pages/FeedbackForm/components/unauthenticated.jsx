import React from 'react';
import FailedAnimation from "../../../assets/feedbackfailed.json"
import Lottie from 'lottie-react';
import "./feedback.css"
const Unauthenticated = () => {
  return (
    <div className="tq-container">
     <Lottie animationData={FailedAnimation}
       style={{ width: "300px", height: "300px" }}
      //  loop={false}
     />
     <h1>Feedback Fails To Authenticate</h1>
    </div>
  );
};

export default Unauthenticated;
