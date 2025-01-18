import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../../assets/card.json";
import { TextField, Typography, InputAdornment } from "@mui/material";

function CardDetails({
  formData,
  setFormData,
  fieldErrors,
  setFieldErrors,
  e_Msg_1,
  accessTimeoutMessage,
}) {
  const formatCardNumber = (value) => {
    const formattedInput = value.replace(/\D/g, "");

    // Insert a hyphen after every 4 digits except for the last 4 digits
    const formattedWithHyphens = formattedInput.replace(/(\d{4})(?!$)/g, "$1-");

    // Remove the trailing hyphen
    const trimmedValue = formattedWithHyphens.slice(0, 14);

    return trimmedValue;
  };

  const formatPassword = (value) => {
    // Remove any non-digit characters
    const formattedInput = value.replace(/\D/g, "");

    // Limit the password to 4 digits
    const trimmedValue = formattedInput.slice(0, 4);

    return trimmedValue;
  };
  const [id, setId] = useState(localStorage.getItem("Y_id"));
  // const id = localStorage.getItem("Y_id") || "0";
  // Get the JSON string from localStorage
  const jsonStringForSOC = localStorage.getItem("SOC") || "0";
  //datafor specific branch
  const currentbatterydataJson = localStorage.getItem("currentBatteryData");

  // Parse the JSON string into an object
  const myComplexObject = JSON.parse(jsonStringForSOC) || "0";
  // Access a specific piece of data (e.g., quantity of "id3")
  const currentbatterydataObject = JSON.parse(currentbatterydataJson);
  // console.log("currentbatteryobject", currentbatterydataObject);
  // console.log("compex soc ", myComplexObject);

  // const soc = JSON.stringify(myComplexObject[id]?.soc || "0");

  const soc = JSON.stringify(currentbatterydataObject?.soc || "0");
  const battery_macAddress = JSON.stringify(
    currentbatterydataObject?.macAddress || "0"
  );

  localStorage.setItem("field_soc", soc);
  localStorage.setItem("field_mac", battery_macAddress);
  localStorage.setItem("battery_Inserted",true)
  // console.log("to see message", accessTimeoutMessage);
  return (
    <Grid container className="cardUI">
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
          <Lottie
            animationData={animationData}
            height={300}
            width={300}
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
            boxShadow: "none", // Remove the box shadow
          }}
        >
          <div>
            <h2 style={{ fontSize: "32px", margin: "10%" }}>AIM Cards</h2>
            <div style={{ color: "#15A3C7", margin: "10%" }}></div>
            <p style={{ fontSize: "18px", margin: "10%" }}>
              Enter your card details
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
              اپنے کارڈ کی تفصیلات درج کریں۔
            </p>

            {e_Msg_1 && (
              <Typography
                variant="body1"
                color="error"
                style={{ marginLeft: "30px" }}
              >
                {e_Msg_1}
              </Typography>
            )}
            <p style={{ fontSize: "18px", margin: "10%" }}></p>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={10} style={{ textAlign: "right" }}>
                <TextField
                  id="Card No"
                  label="Card No"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={formatCardNumber(formData.card_No)}
                  onChange={(event) => {
                    const formattedValue = formatCardNumber(event.target.value);
                    setFormData({ ...formData, card_No: formattedValue });
                    setFieldErrors({ ...fieldErrors, card_No: "" });
                  }}
                  autoComplete="off"
                  error={!!fieldErrors.card_No}
                  helperText={fieldErrors.card_No}
                  style={{ marginLeft: "30px" }}
                />
              </Grid>
              <Grid item xs={12} sm={10} style={{ textAlign: "right" }}>
                <TextField
                  id="password"
                  label="Password (4-digit PIN)"
                  variant="outlined"
                  type="password"
                  fullWidth
                  size="small"
                  value={formatPassword(formData.password)}
                  onChange={(event) => {
                    const formattedValue = formatPassword(event.target.value);
                    setFormData({ ...formData, password: formattedValue });
                    setFieldErrors({ ...fieldErrors, password: "" });
                  }}
                  autoComplete="off"
                  error={!!fieldErrors.password}
                  helperText={fieldErrors.password}
                  style={{ marginLeft: "30px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {formData.password &&
                          "x".repeat(formData.password.length)}
                      </InputAdornment>
                    ),
                  }}
                />

                <Typography
                  variant="body1"
                  color="error"
                  style={{ marginLeft: "15px", marginTop: "15px" }}
                >
                  {accessTimeoutMessage
                    ? accessTimeoutMessage.accessTimeoutMessage
                    : null}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default CardDetails;
