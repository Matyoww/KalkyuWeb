import React, { useState } from "react";
import './Weight.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material'

export default function Weight() {

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
        case "kg": 
          switch (UnitTo){
            case "g": 
              let g = UnitValue * 1000
              setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
              break;
            case "mg":
              let mg = UnitValue * 1000000
              setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
              break;
            case "μg": 
              let myug = UnitValue * 1000000000
              setConvertedValue(parseFloat(myug.toFixed(6))+" "+UnitTo)
              break;
            case "lb": 
              let lb = UnitValue *  2.205
              setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
              break;
            case "oz": 
              let oz = UnitValue * 35.274
              setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
              break;
            default: setConvertedValue(UnitValue+" "+UnitTo)
              break;
          }
          break;
        case "g": 
          switch (UnitTo){
            case "kg": 
              let kg = UnitValue / 1000
              setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
              break;
            case "mg":
              let mg = UnitValue * 1000
              setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
              break;
            case "μg": 
              let myug = UnitValue * 1000000
              setConvertedValue(parseFloat(myug.toFixed(6))+" "+UnitTo)
              break;
            case "lb": 
              let lb = UnitValue / 454
              setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
              break;
            case "oz": 
              let oz = UnitValue / 28.35
              setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
              break;
            default: setConvertedValue(UnitValue+" "+UnitTo)
              break;
          }
          break;
        case "mg": 
          switch (UnitTo){
            case "kg": 
              let kg = UnitValue / 1000000
              setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
              break;
            case "g":
              let g = UnitValue / 1000
              setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
              break;
            case "μg": 
              let myug = UnitValue * 1000
              setConvertedValue(parseFloat(myug.toFixed(6))+" "+UnitTo)
              break;
            case "lb": 
              let lb = UnitValue / 453592
              setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
              break;
            case "oz": 
              let oz = UnitValue / 28350
              setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
              break;
            default: setConvertedValue(UnitValue+" "+UnitTo)
              break;
          }
          break;
        case "μg": 
          switch (UnitTo){
            case "kg": 
              let kg = UnitValue / 1000000000
              setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
              break;
            case "g":
              let g = UnitValue / 1000000
              setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
              break;
            case "mg": 
              let mg = UnitValue / 1000
              setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
              break;
            case "lb": 
              let lb = UnitValue / 453600000
              setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
              break;
            case "oz": 
              let oz = UnitValue / 28350000
              setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
              break;
            default: setConvertedValue(UnitValue+" "+UnitTo)
              break;
          }
          break;
        case "lb": 
          switch (UnitTo){
            case "kg": 
              let kg = UnitValue / 2.205
              setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
              break;
            case "g":
              let g = UnitValue * 454
              setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
              break;
            case "mg": 
              let mg = UnitValue * 453592
              setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
              break;
            case "μg": 
              let myug = UnitValue * 453600000
              setConvertedValue(parseFloat(myug.toFixed(6))+" "+UnitTo)
              break;
            case "oz": 
              let oz = UnitValue * 16
              setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
              break;
            default: setConvertedValue(UnitValue+" "+UnitTo)
              break;
          }
          break;
        case "oz": 
          switch (UnitTo){
            case "kg": 
              let kg = UnitValue / 35.274
              setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
              break;
            case "g":
              let g = UnitValue * 28.35
              setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
              break;
            case "mg": 
              let mg = UnitValue * 28350
              setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
              break;
            case "μg": 
              let myug = UnitValue * 28350000
              setConvertedValue(parseFloat(myug.toFixed(6))+" "+UnitTo)
              break;
            case "lb": 
              let lb = UnitValue / 16
              setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
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
    <div className="weight" id="weight">
      <div className="content">
        <h1>WEIGHT CONVERSION</h1>
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
                    <MenuItem value={"kg"}>Kilogram</MenuItem>
                    <MenuItem value={"g"}>Gram</MenuItem>
                    <MenuItem value={"mg"}>Milligram</MenuItem>
                    <MenuItem value={"μg"}>Microgram</MenuItem>
                    <MenuItem value={"lb"}>Pound</MenuItem>
                    <MenuItem value={"oz"}>Ounce</MenuItem>
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
                      <MenuItem value={"kg"}>Kilogram</MenuItem>
                      <MenuItem value={"g"}>Gram</MenuItem>
                      <MenuItem value={"mg"}>Milligram</MenuItem>
                      <MenuItem value={"μg"}>Microgram</MenuItem>
                      <MenuItem value={"lb"}>Pound</MenuItem>
                      <MenuItem value={"oz"}>Ounce</MenuItem>
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