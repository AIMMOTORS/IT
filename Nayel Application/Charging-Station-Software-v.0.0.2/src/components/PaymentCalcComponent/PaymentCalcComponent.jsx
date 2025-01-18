import React, { useState } from "react";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../assets/PaymentCalc.json"; // Import your Lottie animation JSON file
// import Calculator from "../assets/calculation.jzson"; // Import your Lottie animation JSON file
import Calculator2 from "../../assets/calculator2.json";
// import { useSpring, animated } from "react-spring";
import "./PaymentCalcStyles.css";
function PaymentCalc({
  formData,
  setFormData,
  fieldErrors,
  setFieldErrors,
  e_Msg_3,
}) {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  // // const [amount,setAmount]=useState(JSON.parse(localStorage.getItem("amount")))
  // const id = localStorage.getItem("Y_id") || "0";
  // // Get the JSON string from localStorage
  // const jsonStringForSOC = localStorage.getItem("SOC") || "0";
  // // Parse the JSON string into an object
  // const myComplexObject = JSON.parse(jsonStringForSOC) || "0";
  // // Access a specific piece of data (e.g., quantity of "id3")
  // const soc = JSON.stringify(myComplexObject[id]?.soc || "0");
  // localStorage.setItem("field_soc", soc);

  // Function to handle animation completion
  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
  };
  // const { value } = useSpring({
  //   from: { value: 0 },
  //   to: { value: parseFloat(formData.amount) }, // Convert amount to a number
  //   config: { duration: 9000 },
  //   onRest: () => {
  //     // Animation has completed, you can set your state here if needed
  //   },
  // });

  return (
    <Grid container className="paymentUI">
      {/* Left */}
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none", // Remove the box shadow
          }}
        >
          <Lottie animationData={animationData} height={300} width={300} />
        </Paper>
      </Grid>

      {/* Right */}
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none", // Remove the box shadow
          }}
        >
          <div>
            <h2 style={{ fontSize: "32px", margin: "10%" }}>
              Calculating Payment
            </h2>
            <div style={{ color: "#15A3C7", margin: "10%" }}></div>
            {e_Msg_3 && ( // Conditionally render the error message
              <Typography
                variant="body1"
                color="error"
                style={{ marginLeft: "20px" }}
              >
                {e_Msg_3}
              </Typography>
            )}
            <p style={{ fontSize: "18px", margin: "10%" }}>
            Please wait while we are calculating your bill
            </p>
            <p
            className="urduText"
              style={{
                fontSize: "18px",
                margin: "10%",
                marginTop: "-20px",
                fontWeight: "bold",
              }}
            >
              براہ کرم انتظار کریں جب تک ہم آپ کے بل کا حساب کر رہے ہیں۔
            </p>

            <Grid container spacing={2}>
              {animationCompleted ? (
                <div className="beautiful-amount">
                  <p className="amount-label">Price: </p>
                  <div className="formatted-amount">
                    {Math.abs(formData.amount)}
                  </div>
                  {/* <animated.div className="formatted-amount">
                    {value.interpolate((val) => `${val.toFixed(2)} ₨` )}
                  </animated.div> */}
                </div>
              ) : (
                <Lottie
                  animationData={Calculator2}
                  style={{
                    height: "200px",
                    width: "200px",
                    marginLeft: "40px",
                    marginTop: "-30px",
                  }}
                  loop={false}
                  onComplete={handleAnimationComplete}
                />
              )}
            </Grid>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PaymentCalc;
