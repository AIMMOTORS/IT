import React, { useState, useEffect } from "react";

import { Grid, Paper, TextField, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../assets/InsertBattery.json"; // Import your Lottie animation JSON file
import animationBattery from "../../assets/loadingBattery.json";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { handleClear } from "../localStorageUtils/localStorageUtils";
function InsertBattery({
  formData,
  setFormData,
  fieldErrors,
  setFieldErrors,
  e_Msg_2,
}) {
  const [X_battery_id, setX_battery_id] = useState(formData.X_battery_id);
  const [X_voltage, setX_voltage] = useState(formData.X_voltage);
  const [X_SOC, setX_SOC] = useState(formData.X_SOC);
  const [Y_SOC, setY_SOC] = useState(formData.Y_SOC);

  const [isLoading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(120);
  const [data_1, setData_1] = useState({});
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const navigate = useNavigate(); // Hook from React Router

  localStorage.setItem("batteryReturnedID", X_battery_id);
  localStorage.setItem("batteryReturnedSOC", X_SOC);

  useEffect(() => {
    let countdown;
    let timeout;

    if (isTimerRunning && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      timeout = setTimeout(() => {
        handleClear();
        navigate("/battery");
        clearInterval(countdown);
        swal("Error", "Battery Was not Inserted in alloted time.", "error");
      }, timer * 1000);
    } else if (timer <= 0) {
      localStorage.clear();
      navigate("/battery");
    }

    return () => {
      clearInterval(countdown);
      clearTimeout(timeout);
    };
  }, [timer, isTimerRunning, navigate]);

  // Retrieve the JSON string from localStorage
  const jsonStringForBatteryPresence = localStorage.getItem("batteryPresent");
  const battery_Inserted = localStorage.getItem("battery_Inserted") || "true";
  const battery_boolean = JSON.parse(battery_Inserted);
  // console.log(typeof battery_boolean)
  // Parse the JSON string into an array of objects
  const data = JSON.parse(jsonStringForBatteryPresence);

  let firstFalseBatteryId = null;

  // Iterate over the object using a for...in loop
  for (const id in data) {
    if (data.hasOwnProperty(id)) {
      const batteryObject = data[id];
      if (
        batteryObject.batteryPresent === false &&
        batteryObject.node === true
      ) {
        firstFalseBatteryId = id;

        break; // Exit the loop after finding the first false battery
      }
    }
  }

  const [firstFalseBattery, setfirstFalseBatteryId] =
    useState(firstFalseBatteryId);
  localStorage.setItem("FalseBatteryId", firstFalseBattery);
  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      // Retrieve data from local storage
      const storedData =
        JSON.parse(localStorage.getItem("batteryPresent")) || {};

      // Retrieve data for the specific ID
      const specificData = storedData[firstFalseBattery];
      // console.log("specific Data", specificData.soc);
      if (
        (specificData && specificData.batteryPresent) ||
        isLoading == false ||
        battery_boolean == false
      ) {
        // Perform the action when batteryPresent becomes true
        localStorage.setItem("battery_Inserted", false);
        setIsLoading(false);
        setIsTimerRunning(false);
        setX_battery_id(specificData.batteryID);
        setX_voltage(specificData.voltage);
        setX_SOC(specificData.soc);
        setY_SOC(Y_SOC);
        console.log(`Battery is present for ID ${firstFalseBattery}!`);
        // You can also do other things here, such as updating the state or making API calls
      }

      // Set the data in the state for rendering or further use
      setData_1(specificData);
    };

    fetchDataFromLocalStorage();
  }, [firstFalseBatteryId]);
  return (
    <Grid container className="batteryUI">
      {/* Left */}
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
          }}
        >
          <Lottie
            animationData={animationData}
            height={500}
            width={500}
            loop={false}
          />
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
            boxShadow: "none",
          }}
        >
          <div>
            <div style={{ color: "#15A3C7", margin: "10%" }}></div>
            {e_Msg_2 && ( // Conditionally render the error message
              <Typography
                variant="body1"
                color="error"
                style={{ marginLeft: "20px" }}
              >
                {e_Msg_2}
              </Typography>
            )}

            {isLoading ? (
              <div style={{ marginLeft: "30px" }}>
                <h2 style={{ fontSize: "32px", margin: "10%" }}>
                  Checking Your Battery
                </h2>
                <p style={{ fontSize: "20px", margin: "10%" }}>
                  Please Insert your Battery in Slot No {firstFalseBattery}
                </p>
                <p
                  className="urduText"
                  style={{
                    fontSize: "15git add px",
                    margin: "10%",
                    marginTop: "-20px",
                    fontWeight: "bold",
                  }}
                >
                  براہ کرم اپنی بیٹری خانہ نمبر {firstFalseBattery} میں ڈالیں۔
                </p>
                <Lottie
                  animationData={animationBattery}
                  style={{
                    height: "100px",
                    width: "100px",
                    marginLeft: "80px",
                  }}
                />
                <p
                  style={{ fontSize: "20px", margin: "10%", marginTop: "0px" }}
                >
                  {`Time remaining: ${timer}s`}
                </p>
              </div>
            ) : (
              <div>
                <h2 style={{ fontSize: "25px", margin: "10%" }}>
                  Battery has been inserted Successfully
                </h2>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "50px",
                    }}
                  >
                    <Typography variant="body1" style={{ marginLeft: "0px" }}>
                      <strong>Inserted Battery id:</strong> {X_battery_id}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    style={{ textAlign: "left", paddingLeft: "50px" }}
                  >
                    <Typography variant="body1" style={{ marginLeft: "0px" }}>
                      <strong>Inserted Battery voltage:</strong> {X_voltage}{" "}
                      volts
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    style={{ textAlign: "left", paddingLeft: "50px" }}
                  >
                    <Typography variant="body1" style={{ marginLeft: "0px" }}>
                      <strong>Inserted Battery SOC:</strong> {X_SOC} %
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    style={{ textAlign: "left", paddingLeft: "50px" }}
                  >
                    <Typography variant="body1" style={{ marginLeft: "0px" }}>
                      <strong>Issued Battery SOC:</strong> {Y_SOC} %
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            )}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default InsertBattery;
