import React, { useState } from "react";
import './Temperature.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material'

export default function Temperature() {

  const [UnitFrom, setUnitFrom] = useState('')
  const [UnitTo, setUnitTo] = useState('')
  const [UnitValue, setUnitValue] = useState()
  const [UnitValueError, setUnitValueError] = useState(false)
  const [ConvertedValue, setConvertedValue] = useState(0)

  const handleChangeUnitFrom = (event) => {
      setUnitFrom(event.target.value);
    };
  const handleChangeUnitTo = (event) => {
      setUnitTo(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (UnitValueError === 0){
      setUnitValueError(true)
    }

    if (UnitValue && UnitFrom && UnitTo){
      switch (UnitFrom) {
        case "°C": 
          switch (UnitTo){
            case "°F": 
              let f = ((UnitValue * (9/5)) + 32)
              setConvertedValue(parseFloat(f.toFixed(6))+" "+UnitTo)
              break;
            case "K":
              let k = (273.15 + (UnitValue*1))
              setConvertedValue(parseFloat(k.toFixed(6))+" "+UnitTo)
              break;
            default: setConvertedValue(UnitValue+" "+UnitTo)
              break;
          }
          break;
        case "°F": 
          switch (UnitTo){
            case "°C": 
              let c = ((UnitValue - 32) * (5/9))
              setConvertedValue(parseFloat(c.toFixed(6))+" "+UnitTo)
              break;
            case "K":
              let k = ((UnitValue - 32) * (5/9)) + 273.15
              setConvertedValue(parseFloat(k.toFixed(6))+" "+UnitTo)
              break;
            default: setConvertedValue(UnitValue+" "+UnitTo)
              break;
          }
          break;
        case "K": 
          switch (UnitTo){
            case "°C": 
              let c = UnitValue - 273.15
              setConvertedValue(parseFloat(c.toFixed(6))+" "+UnitTo)
              break;
            case "°F":
              let f = (((UnitValue - 273.15) * (9/5)) + 32)
              setConvertedValue(parseFloat(f.toFixed(6))+" "+UnitTo)
              break;
            default: setConvertedValue(UnitValue+" "+UnitTo)
              break;
          }
          break;
        default: setConvertedValue("Invalid") 
          break;
      }
    }
  }

  return (
    <div className="temperature" id="weight">
      <div className="content">
        <h1>TEMPERATURE CONVERSION</h1>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className='metric-unit-opt'>
            <div className="metric-unit-opt-container">
              <TextField 
                type="number"
                onChange={(e) => setUnitValue(e.target.value)}
                placeholder="Enter metric value"
                error={UnitValueError}
                inputProps={{
                    style: { fontSize: 25, textAlign: "left", color: "#585858" },
                  }}
                  sx={{
                    minWidth: 300,
                    border: 4,
                    borderRadius: 2,
                    borderColor: "#347571",
                    marginBottom: 2,
                }}
              />
              <FormControl sx={{ m: 1, minWidth: 450 }}>
                  <InputLabel id="convert-from">Convert From</InputLabel>
                  <Select
                    label="Convert From"
                    onChange={handleChangeUnitFrom}
                    value={UnitFrom}
                  >       
                    <MenuItem value={"°C"}>Celsius</MenuItem>
                    <MenuItem value={"°F"}>Fahrenheit</MenuItem>
                    <MenuItem value={"K"}>Kelvin</MenuItem>
                  </Select>
              </FormControl>  
          </div>
          <p>→</p>
          <div className="metric-unit-opt-container">
              <Typography
                sx={{
                    minWidth: 400,
                    minHeight: 74,
                    color: "#585858",
                    paddingLeft: 2,
                    border: 4,
                    borderRadius: 2,
                    borderColor: "#347571",
                    marginBottom: 2,
                }}
              >
                {ConvertedValue}
              </Typography>

              <FormControl sx={{ m: 1, minWidth: 450 }}>
                  <InputLabel id="convert-to">Convert To</InputLabel>
                    <Select
                      labelId="convert-to"
                      id="con-to"
                      label="Convert To"
                      onChange={handleChangeUnitTo}
                      value={UnitTo}
                    >
                      <MenuItem value={"°C"}>Celsius</MenuItem>
                      <MenuItem value={"°F"}>Fahrenheit</MenuItem>
                      <MenuItem value={"K"}>Kelvin</MenuItem>
                  </Select>
              </FormControl>
              
          </div>
        </div>
        <Button
          type="submit"
        >
          CONVERT
        </Button>
        </form>

      </div>
    </div>
  )
}