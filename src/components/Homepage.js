import * as React from "react";
import { styled } from "@mui/material/styles";
import { Image } from "mui-image";
import { Paper, Box, Button } from "@mui/material";

const CustomButton = styled(Button)({
  margin: 5,
  height: 45,
  width: 300,
  backgroundColor: "#98b570",
  color: "#FFFFFF",
  fontSize: 20,
  "&:hover": {
    backgroundColor: "#648F40",
  },
});

export default function Homepage() {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box mt={5} mb={7} sx={{ width: 300 }}>
        <Image
          src="/kalkyu_logo.png"
          alt="Kalkyu-logo"
          duration={0}
          fit="contain"
        />
      </Box>
      <Paper
        sx={{
          backgroundColor: "#FFFFFF",
          height: 325,
          maxHeight: 310,
          width: 400,
          overflow: "auto",
        }}
        variant="elevation"
      >
        <Box
          display="flex"
          mt={2}
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Button
            sx={{ height: 45, width: 200, backgroundColor: "#B7CB9C" }}
            variant="contained"
          >
            Calculator
          </Button> */}
          <CustomButton href="/basiccalc">CALCULATOR</CustomButton>
          <CustomButton>WEIGHT</CustomButton>
          <CustomButton>VOLUME</CustomButton>
          <CustomButton>LENGTH</CustomButton>
          <CustomButton>TIME</CustomButton>
        </Box>
      </Paper>
    </Box>
  );
}
