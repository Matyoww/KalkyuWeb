import React, { useState } from "react";
import './Length.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material'


const Length = () => {

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
          case "mm": 
            switch (UnitTo){
              case "cm": 
                let cm = UnitValue * 0.1
                setConvertedValue(parseFloat(cm.toFixed(6))+" "+UnitTo)
                break;
              case "m":
                let m = UnitValue * 0.001
                setConvertedValue(parseFloat(m.toFixed(6))+" "+UnitTo)
                break;
              case "km": 
                let km = UnitValue * 0.000001
                setConvertedValue(parseFloat(km.toFixed(6))+" "+UnitTo)
                break;
              case "in": 
                let inch = UnitValue * 0.03937
                setConvertedValue(parseFloat(inch.toFixed(6))+" "+UnitTo)
                break;
              case "ft": 
                let ft = UnitValue * 0.003281
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              case "yd": 
                let yd = UnitValue * 0.0010936
                setConvertedValue(parseFloat(yd.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "cm": 
            switch (UnitTo){
              case "mm": 
                let mm = UnitValue * 10
                setConvertedValue(parseFloat(mm.toFixed(6))+" "+UnitTo)
                break;
              case "m":
                let m = UnitValue * 0.01
                setConvertedValue(parseFloat(m.toFixed(6))+" "+UnitTo)
                break;
              case "km": 
                let km = UnitValue * 0.00001
                setConvertedValue(parseFloat(km.toFixed(6))+" "+UnitTo)
                break;
              case "in": 
                let inch = UnitValue * 0.3937
                setConvertedValue(parseFloat(inch.toFixed(6))+" "+UnitTo)
                break;
              case "ft": 
                let ft = UnitValue * 0.03281
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              case "yd": 
                let yd = UnitValue * 0.010936
                setConvertedValue(parseFloat(yd.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "m": 
            switch (UnitTo){
              case "mm": 
                let mm = UnitValue * 1000
                setConvertedValue(parseFloat(mm.toFixed(6))+" "+UnitTo)
                break;
              case "cm":
                let m = UnitValue * 100
                setConvertedValue(parseFloat(m.toFixed(6))+" "+UnitTo)
                break;
              case "km": 
                let km = UnitValue * 0.001
                setConvertedValue(parseFloat(km.toFixed(6))+" "+UnitTo)
                break;
              case "in": 
                let inch = UnitValue * 39.37
                setConvertedValue(parseFloat(inch.toFixed(6))+" "+UnitTo)
                break;
              case "ft": 
                let ft = UnitValue * 3.281
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              case "yd": 
                let yd = UnitValue * 1.0936
                setConvertedValue(parseFloat(yd.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }        
            break;
          case "km": 
            switch (UnitTo){
              case "mm": 
                let mm = UnitValue * 1000000
                setConvertedValue(parseFloat(mm.toFixed(6))+" "+UnitTo)
                break;
              case "cm":
                let cm = UnitValue * 100000
                setConvertedValue(parseFloat(cm.toFixed(6))+" "+UnitTo)
                break;
              case "m": 
                let m = UnitValue * 1000
                setConvertedValue(parseFloat(m.toFixed(6))+" "+UnitTo)
                break;
              case "in": 
                let inch = UnitValue * 39370
                setConvertedValue(parseFloat(inch.toFixed(6))+" "+UnitTo)
                break;
              case "ft": 
                let ft = UnitValue * 3281
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              case "yd": 
                let yd = UnitValue * 1093.6
                setConvertedValue(parseFloat(yd.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "in": 
            switch (UnitTo){
              case "mm": 
                let mm = UnitValue * 25.4
                setConvertedValue(parseFloat(mm.toFixed(6))+" "+UnitTo)
                break;
              case "cm":
                let cm = UnitValue * 2.54
                setConvertedValue(parseFloat(cm.toFixed(6))+" "+UnitTo)
                break;
              case "m": 
                let m = UnitValue * 0.0254
                setConvertedValue(parseFloat(m.toFixed(6))+" "+UnitTo)
                break;
              case "km": 
                let km = UnitValue * 0.0000254
                setConvertedValue(parseFloat(km.toFixed(6))+" "+UnitTo)
                break;
              case "ft": 
                let ft = UnitValue * 0.08333
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              case "yd": 
                let yd = UnitValue * 0.02778
                setConvertedValue(parseFloat(yd.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "ft": 
            switch (UnitTo){
              case "mm": 
                let mm = UnitValue * 304.8
                setConvertedValue(parseFloat(mm.toFixed(6))+" "+UnitTo)
                break;
              case "cm":
                let cm = UnitValue * 30.48
                setConvertedValue(parseFloat(cm.toFixed(6))+" "+UnitTo)
                break;
              case "m": 
                let m = UnitValue * 0.3048
                setConvertedValue(parseFloat(m.toFixed(6))+" "+UnitTo)
                break;
              case "km": 
                let km = UnitValue * 0.0003048
                setConvertedValue(parseFloat(km.toFixed(6))+" "+UnitTo)
                break;
              case "in": 
                let inch = UnitValue * 12
                setConvertedValue(parseFloat(inch.toFixed(6))+" "+UnitTo)
                break;
              case "yd": 
                let yd = UnitValue * 0.33333
                setConvertedValue(parseFloat(yd.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "yd": 
            switch (UnitTo){
              case "mm": 
                let mm = UnitValue * 914.4
                setConvertedValue(parseFloat(mm.toFixed(6))+" "+UnitTo)
                break;
              case "cm":
                let cm = UnitValue * 91.44
                setConvertedValue(parseFloat(cm.toFixed(6))+" "+UnitTo)
                break;
              case "m": 
                let m = UnitValue * 0.9144
                setConvertedValue(parseFloat(m.toFixed(6))+" "+UnitTo)
                break;
              case "km": 
                let km = UnitValue * 0.0009144
                setConvertedValue(parseFloat(km.toFixed(6))+" "+UnitTo)
                break;
              case "in": 
                let inch = UnitValue * 36
                setConvertedValue(parseFloat(inch.toFixed(6))+" "+UnitTo)
                break;
              case "ft": 
                let ft = UnitValue * 3
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          default: setConvertedValue("Invalid") 
        }
      }
    }

    return (
        <div className="length" id="length">
        <div className="content">
          <h1>LENGTH CONVERSION</h1>
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
                      borderColor: "#3C9C7D",
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
                      <MenuItem value={"mm"}>Millimeter</MenuItem>
                      <MenuItem value={"cm"}>Centimeter</MenuItem>
                      <MenuItem value={"m"}>Meter</MenuItem>
                      <MenuItem value={"km"}>Kilometer</MenuItem>
                      <MenuItem value={"in"}>Inch</MenuItem>
                      <MenuItem value={"ft"}>Foot</MenuItem>
                      <MenuItem value={"yd"}>Yard</MenuItem>
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
                      borderColor: "#3C9C7D",
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
                        <MenuItem value={"mm"}>Millimeter</MenuItem>
                        <MenuItem value={"cm"}>Centimeter</MenuItem>
                        <MenuItem value={"m"}>Meter</MenuItem>
                        <MenuItem value={"km"}>Kilometer</MenuItem>
                        <MenuItem value={"in"}>Inch</MenuItem>
                        <MenuItem value={"ft"}>Foot</MenuItem>
                        <MenuItem value={"yd"}>Yard</MenuItem>
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

export default Length