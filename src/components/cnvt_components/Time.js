import React, { useState } from "react";
import './Time.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material'


const Time = () => {

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
          case "secs": 
            switch (UnitTo){
              case "mins": 
                let mins = UnitValue / 60
                setConvertedValue(parseFloat(mins.toFixed(6))+" "+UnitTo)
                break;
              case "hrs":
                let hrs = UnitValue / 3600
                setConvertedValue(parseFloat(hrs.toFixed(6))+" "+UnitTo)
                break;
              case "days": 
                let days = UnitValue / 86400
                setConvertedValue(parseFloat(days.toFixed(6))+" "+UnitTo)
                break;
              case "weeks": 
                let weeks = UnitValue / 604800
                setConvertedValue(parseFloat(weeks.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "mins": 
            switch (UnitTo){
              case "secs": 
                let secs = UnitValue * 60
                setConvertedValue(parseFloat(secs.toFixed(6))+" "+UnitTo)
                break;
              case "hrs":
                let hrs = UnitValue / 60
                setConvertedValue(parseFloat(hrs.toFixed(6))+" "+UnitTo)
                break;
              case "days": 
                let days = UnitValue / 1440
                setConvertedValue(parseFloat(days.toFixed(6))+" "+UnitTo)
                break;
              case "weeks": 
                let weeks = UnitValue / 10080
                setConvertedValue(parseFloat(weeks.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "hrs": 
            switch (UnitTo){
              case "secs": 
                let secs = UnitValue * 3600
                setConvertedValue(parseFloat(secs.toFixed(6))+" "+UnitTo)
                break;
              case "mins":
                let mins = UnitValue * 60
                setConvertedValue(parseFloat(mins.toFixed(6))+" "+UnitTo)
                break;
              case "days": 
                let days = UnitValue / 24
                setConvertedValue(parseFloat(days.toFixed(6))+" "+UnitTo)
                break;
              case "weeks": 
                let weeks = UnitValue / 168
                setConvertedValue(parseFloat(weeks.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }      
            break;
          case "days": 
            switch (UnitTo){
              case "secs": 
                let secs = UnitValue * 86400
                setConvertedValue(parseFloat(secs.toFixed(6))+" "+UnitTo)
                break;
              case "mins":
                let mins = UnitValue * 1440
                setConvertedValue(parseFloat(mins.toFixed(6))+" "+UnitTo)
                break;
              case "hrs": 
                let hrs = UnitValue * 24
                setConvertedValue(parseFloat(hrs.toFixed(6))+" "+UnitTo)
                break;
              case "weeks": 
                let weeks = UnitValue / 7
                setConvertedValue(parseFloat(weeks.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }  
            break;
          case "weeks": 
            switch (UnitTo){
                case "secs": 
                let secs = UnitValue * 604800
                setConvertedValue(parseFloat(secs.toFixed(6))+" "+UnitTo)
                break;
              case "mins":
                let mins = UnitValue * 10080
                setConvertedValue(parseFloat(mins.toFixed(6))+" "+UnitTo)
                break;
              case "hrs": 
                let hrs = UnitValue * 168
                setConvertedValue(parseFloat(hrs.toFixed(6))+" "+UnitTo)
                break;
              case "days": 
                let days = UnitValue * 7
                setConvertedValue(parseFloat(days.toFixed(6))+" "+UnitTo)
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
        <div className="time" id="time">
        <div className="content">
          <h1>TIME CONVERSION</h1>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div className='metric-unit-opt'>
              <div className="metric-unit-opt-container">
                <TextField 
                  type="number"
                  onChange={(e) => setUnitValue(e.target.value)}
                  placeholder="Enter time value"
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
                      <MenuItem value={"secs"}>Seconds</MenuItem>
                      <MenuItem value={"mins"}>Minutes</MenuItem>
                      <MenuItem value={"hrs"}>Hours</MenuItem>
                      <MenuItem value={"days"}>Days</MenuItem>
                      <MenuItem value={"weeks"}>Weeks</MenuItem>
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
                        <MenuItem value={"secs"}>Seconds</MenuItem>
                        <MenuItem value={"mins"}>Minutes</MenuItem>
                        <MenuItem value={"hrs"}>Hours</MenuItem>
                        <MenuItem value={"days"}>Days</MenuItem>
                        <MenuItem value={"weeks"}>Weeks</MenuItem>
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

export default Time