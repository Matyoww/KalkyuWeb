import React, { useState } from "react";
import './Mass.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material'


const Mass = () => {

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
          case "mg": 
            switch (UnitTo){
              case "g": 
                let g = UnitValue * 0.001
                setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
                break;
              case "kg":
                let kg = UnitValue * 0.000001
                setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
                break;
              case "t": 
                let t = UnitValue * 0.000000001
                setConvertedValue(parseFloat(t.toFixed(6))+" "+UnitTo)
                break;
              case "oz": 
                let oz = UnitValue * 0.000035274
                setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
                break;
              case "lb": 
                let lb = UnitValue * 0.0000022046
                setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "g": 
            switch (UnitTo){
              case "mg": 
                let mg = UnitValue * 1000
                setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
                break;
              case "kg":
                let kg = UnitValue * 0.001
                setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
                break;
              case "t": 
                let t = UnitValue * 0.000001
                setConvertedValue(parseFloat(t.toFixed(6))+" "+UnitTo)
                break;
              case "oz": 
                let oz = UnitValue * 0.035274
                setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
                break;
              case "lb": 
                let lb = UnitValue * 0.00220462
                setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "kg": 
            switch (UnitTo){
              case "mg": 
                let mg = UnitValue * 1000000
                setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
                break;
              case "g":
                let g = UnitValue * 1000
                setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
                break;
              case "t": 
                let t = UnitValue * 0.001
                setConvertedValue(parseFloat(t.toFixed(6))+" "+UnitTo)
                break;
              case "oz": 
                let oz = UnitValue * 35.27396195
                setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
                break;
              case "lb": 
                let lb = UnitValue * 2.20462
                setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }       
            break;
          case "t": 
            switch (UnitTo){
              case "mg": 
                let mg = UnitValue * 1000000000
                setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
                break;
              case "g":
                let g = UnitValue * 1000000
                setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
                break;
              case "kg": 
                let kg = UnitValue * 1000
                setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
                break;
              case "oz": 
                let oz = UnitValue * 35273.96195
                setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
                break;
              case "lb": 
                let lb = UnitValue * 2204.6226218
                setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            } 
            break;
          case "oz": 
            switch (UnitTo){
              case "mg": 
                let mg = UnitValue * 28349.523125
                setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
                break;
              case "g":
                let g = UnitValue * 28.349523125
                setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
                break;
              case "kg": 
                let kg = UnitValue * 0.0283495231
                setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
                break;
              case "t": 
                let t = UnitValue * 0.0000283495
                setConvertedValue(parseFloat(t.toFixed(6))+" "+UnitTo)
                break;
              case "lb": 
                let lb = UnitValue * 0.0625
                setConvertedValue(parseFloat(lb.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "lb": 
            switch (UnitTo){
              case "mg": 
                let mg = UnitValue * 453592.37
                setConvertedValue(parseFloat(mg.toFixed(6))+" "+UnitTo)
                break;
              case "g":
                let g = UnitValue * 453.59237
                setConvertedValue(parseFloat(g.toFixed(6))+" "+UnitTo)
                break;
              case "kg": 
                let kg = UnitValue * 0.45359237
                setConvertedValue(parseFloat(kg.toFixed(6))+" "+UnitTo)
                break;
              case "t": 
                let t = UnitValue * 0.0004535924
                setConvertedValue(parseFloat(t.toFixed(6))+" "+UnitTo)
                break;
              case "oz": 
                let oz = UnitValue * 16
                setConvertedValue(parseFloat(oz.toFixed(6))+" "+UnitTo)
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
        <div className="mass" id="mass">
        <div className="content">
          <h1>MASS CONVERSION</h1>
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
                      <MenuItem value={"mg"}>Milliliter</MenuItem>
                      <MenuItem value={"g"}>Liter</MenuItem>
                      <MenuItem value={"kg"}>Cup</MenuItem>
                      <MenuItem value={"t"}>Pint</MenuItem>
                      <MenuItem value={"oz"}>Gallon</MenuItem>
                      <MenuItem value={"lb"}>Cubic Meter</MenuItem>
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
                        <MenuItem value={"mg"}>Milliliter</MenuItem>
                        <MenuItem value={"g"}>Liter</MenuItem>
                        <MenuItem value={"kg"}>Cup</MenuItem>
                        <MenuItem value={"t"}>Pint</MenuItem>
                        <MenuItem value={"oz"}>Gallon</MenuItem>
                        <MenuItem value={"lb"}>Cubic Meter</MenuItem>
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

export default Mass