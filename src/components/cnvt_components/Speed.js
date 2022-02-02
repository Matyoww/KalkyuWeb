import React, { useState } from "react";
import './Speed.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material'


const Speed = () => {

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
          case "mph": 
            switch (UnitTo){
              case "fps": 
                let fps = UnitValue * 1.46667
                setConvertedValue(parseFloat(fps.toFixed(6))+" "+UnitTo)
                break;
              case "mps":
                let mps = UnitValue * 0.447039
                setConvertedValue(parseFloat(mps.toFixed(6))+" "+UnitTo)
                break;
              case "kph": 
                let kph = UnitValue * 1.60934
                setConvertedValue(parseFloat(kph.toFixed(6))+" "+UnitTo)
                break;
              case "kn": 
                let kn = UnitValue * 0.868976
                setConvertedValue(parseFloat(kn.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "fps": 
            switch (UnitTo){
              case "mph": 
                let mph = UnitValue * 0.681817
                setConvertedValue(parseFloat(mph.toFixed(6))+" "+UnitTo)
                break;
              case "mps":
                let mps = UnitValue * 0.3048
                setConvertedValue(parseFloat(mps.toFixed(6))+" "+UnitTo)
                break;
              case "kph": 
                let kph = UnitValue * 1.09728
                setConvertedValue(parseFloat(kph.toFixed(6))+" "+UnitTo)
                break;
              case "kn": 
                let kn = UnitValue * 0.592484
                setConvertedValue(parseFloat(kn.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "mps": 
            switch (UnitTo){
              case "mph": 
                let mph = UnitValue * 2.23694
                setConvertedValue(parseFloat(mph.toFixed(6))+" "+UnitTo)
                break;
              case "fps":
                let fps = UnitValue * 3.28084
                setConvertedValue(parseFloat(fps.toFixed(6))+" "+UnitTo)
                break;
              case "kph": 
                let kph = UnitValue * 3.6
                setConvertedValue(parseFloat(kph.toFixed(6))+" "+UnitTo)
                break;
              case "kn": 
                let kn = UnitValue * 1.94384
                setConvertedValue(parseFloat(kn.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }      
            break;
          case "kph": 
            switch (UnitTo){
              case "mph": 
                let mph = UnitValue * 0.621373
                setConvertedValue(parseFloat(mph.toFixed(6))+" "+UnitTo)
                break;
              case "fps":
                let fps = UnitValue * 0.911344
                setConvertedValue(parseFloat(fps.toFixed(6))+" "+UnitTo)
                break;
              case "mps": 
                let mps = UnitValue * 0.277778
                setConvertedValue(parseFloat(mps.toFixed(6))+" "+UnitTo)
                break;
              case "kn": 
                let kn = UnitValue * 0.539957
                setConvertedValue(parseFloat(kn.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }  
            break;
          case "kn": 
            switch (UnitTo){
                case "mph": 
                let mph = UnitValue * 1.15078
                setConvertedValue(parseFloat(mph.toFixed(6))+" "+UnitTo)
                break;
              case "fps":
                let fps = UnitValue * 1.68781
                setConvertedValue(parseFloat(fps.toFixed(6))+" "+UnitTo)
                break;
              case "mps": 
                let mps = UnitValue * 0.514446
                setConvertedValue(parseFloat(mps.toFixed(6))+" "+UnitTo)
                break;
              case "kph": 
                let kph = UnitValue * 1.852
                setConvertedValue(parseFloat(kph.toFixed(6))+" "+UnitTo)
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
        <div className="speed" id="speed">
        <div className="content">
          <h1>SPEED CONVERSION</h1>
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
                      <MenuItem value={"mph"}>Miles per hour</MenuItem>
                      <MenuItem value={"fps"}>Feet per second</MenuItem>
                      <MenuItem value={"mps"}>Meters per second</MenuItem>
                      <MenuItem value={"kph"}>Kilometers per hour</MenuItem>
                      <MenuItem value={"kn"}>Knot</MenuItem>
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
                        <MenuItem value={"mph"}>Miles per hour</MenuItem>
                        <MenuItem value={"fps"}>Feet per second</MenuItem>
                        <MenuItem value={"mps"}>Meters per second</MenuItem>
                        <MenuItem value={"kph"}>Kilometers per hour</MenuItem>
                        <MenuItem value={"kn"}>Knot</MenuItem>
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

export default Speed