import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { create, all } from "mathjs";
import './Navbar.css'
import logo from './images/logo.png'


const txt_buttons = [
  "7",
  "8",
  "9",
  "+",
  "^",
  "4",
  "5",
  "6",
  "-",
  "(",
  "1",
  "2",
  "3",
  "*",
  ")",
  "C",
  "0",
  ".",
  "/",
  "=",
];

// from math.js
const config = {};
const math = create(all, config);

// custom styled components
const InfoTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset, &.Mui-focused fieldset, fieldset": {
      border: 0,
    },
  },
});

const CustomButton = styled(Button)({
  height: 50,
  width: 70,
  fontSize: 26,
  backgroundColor: "#98b570",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#47662E",
  },
});

export default function BasicCalc() {
  const [result, setResult] = useState("0");
  const [info, setInfo] = useState("");

  const parse = (str) => {
    try {
      setResult(math.evaluate(str).toString());
    } catch (error) {
      setResult("Error!");
    }
  };

  const renderButtons = (item) => {
    if (item in ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]) {
      return (
        <Grid item xs={2.4} sx={{ textAlign: "center" }}>
          <CustomButton
            sx={{ backgroundColor: "#77964B" }}
            onClick={() => {
              setInfo(info + item);
            }}
          >
            {item}
          </CustomButton>
        </Grid>
      );
    } else if (item === "=") {
      return (
        <Grid item xs={2.4} sx={{ textAlign: "center" }}>
          <CustomButton
            onClick={() => {
              parse(info);
            }}
          >
            {item}
          </CustomButton>
        </Grid>
      );
    } else if (item === "C") {
      return (
        <Grid item xs={2.4} sx={{ textAlign: "center" }}>
          <CustomButton
            onClick={() => {
              setInfo("");
              setResult("0");
            }}
          >
            {item}
          </CustomButton>
        </Grid>
      );
    } else {
      return (
        <Grid item xs={2.4} sx={{ textAlign: "center" }}>
          <CustomButton
            onClick={() => {
              setInfo(info + item);
            }}
          >
            {item}
          </CustomButton>
        </Grid>
      );
    }
  };

  return (
    <div className="basicCalc">
      <Box
        display="flex"
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CalcNav />
        <Box
          display="flex"
          backgroundColor="#ACACAC"
          pt={2}
          pb={4}
          sx={{
            width: 500,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            boxShadow: 3,
          }}
        >
          <InfoTextField
            margin="normal"
            value={info}
            placeholder="Enter here"
            onChange={(e) => {
              setInfo(e.target.value);
            }}
            inputProps={{
              style: { fontSize: 20, textAlign: "right", color: "#585858" },
            }}
            sx={{
              minWidth: 400,
              border: 4,
              borderRadius: 3,
              borderColor: "#95A67C",
              backgroundColor: "#E5E5E5",
            }}
          />

          <Typography
            align="right"
            sx={{
              minWidth: 400,
              color: "#585858",
              fontSize: 25,
              padding: 2,
              border: 4,
              borderRadius: 3,
              borderColor: "#95A67C",
              backgroundColor: "#E5E5E5",
            }}
          >
            {result}
          </Typography>

          <Grid
            pb={2}
            px={1}
            mt={7}
            sx={{ width: 400, backgroundColor: "#E5E5E5" }}
            container
            rowSpacing={2}
          >
            {txt_buttons.map((item) => renderButtons(item))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

function CalcNav(){

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
            </nav>
        </div>
    )
}
