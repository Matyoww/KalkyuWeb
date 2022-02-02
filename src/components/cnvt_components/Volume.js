import React, { useState } from "react";
import './Volume.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material'


const Volume = () => {

    const [UnitFrom, setUnitFrom] = useState('')
    const [UnitTo, setUnitTo] = useState('')
    const [UnitValue, setUnitValue] = useState()
    const [UnitValueError, setUnitValueError] = useState(false)
    const [ConvertedValue, setConvertedValue] = useState(0)
    const [x, setX] = useState(0)


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
          case "ml": 
            switch (UnitTo){
              case "l": 
                let l = UnitValue * 0.001
                setConvertedValue(parseFloat(l.toFixed(6))+" "+UnitTo)
                break;
              case "cup":
                let cup = UnitValue * 0.0042267528
                setConvertedValue(parseFloat(cup.toFixed(6))+" "+UnitTo)
                break;
              case "pt": 
                let pt = UnitValue * 0.0021133764
                setConvertedValue(parseFloat(pt.toFixed(6))+" "+UnitTo)
                break;
              case "gal": 
                let gal = UnitValue * 0.0002641721
                setConvertedValue(parseFloat(gal.toFixed(6))+" "+UnitTo)
                break;
              case "m^3": 
                let mc = UnitValue * 0.000001
                setConvertedValue(parseFloat(mc.toFixed(6))+" "+UnitTo)
                break;
              case "ft^3": 
                let ft = UnitValue * 0.0000353147
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "l": 
            switch (UnitTo){
              case "ml": 
                let ml = UnitValue * 1000
                setConvertedValue(parseFloat(ml.toFixed(6))+" "+UnitTo)
                break;
              case "cup":
                let cup = UnitValue * 4.2267528377
                setConvertedValue(parseFloat(cup.toFixed(6))+" "+UnitTo)
                break;
              case "pt": 
                let pt = UnitValue * 2.1133764189
                setConvertedValue(parseFloat(pt.toFixed(6))+" "+UnitTo)
                break;
              case "gal": 
                let gal = UnitValue * 0.2641720524
                setConvertedValue(parseFloat(gal.toFixed(6))+" "+UnitTo)
                break;
              case "m^3": 
                let mc = UnitValue * 0.001
                setConvertedValue(parseFloat(mc.toFixed(6))+" "+UnitTo)
                break;
              case "ft^3": 
                let ft = UnitValue * 0.0353146667
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "cup": 
            switch (UnitTo){
              case "ml": 
                let ml = UnitValue * 236.5882365
                setConvertedValue(parseFloat(ml.toFixed(6))+" "+UnitTo)
                break;
              case "l":
                let l = UnitValue * 0.2365882365
                setConvertedValue(parseFloat(l.toFixed(6))+" "+UnitTo)
                break;
              case "pt": 
                let pt = UnitValue * 0.5283441
                setConvertedValue(parseFloat(pt.toFixed(6))+" "+UnitTo)
                break;
              case "gal": 
                let gal = UnitValue * 0.066043013
                setConvertedValue(parseFloat(gal.toFixed(6))+" "+UnitTo)
                break;
              case "m^3": 
                let mc = UnitValue * 0.0002365882
                setConvertedValue(parseFloat(mc.toFixed(6))+" "+UnitTo)
                break;
              case "ft^3": 
                let ft = UnitValue * 0.0083550347
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }        
            break;
          case "pt": 
            switch (UnitTo){
              case "ml": 
                let ml = UnitValue * 473.176473
                setConvertedValue(parseFloat(ml.toFixed(6))+" "+UnitTo)
                break;
              case "l":
                let l = UnitValue * 0.473176473
                setConvertedValue(parseFloat(l.toFixed(6))+" "+UnitTo)
                break;
              case "cup": 
                let cup = UnitValue * 2
                setConvertedValue(parseFloat(cup.toFixed(6))+" "+UnitTo)
                break;
              case "gal": 
                let gal = UnitValue * 0.125
                setConvertedValue(parseFloat(gal.toFixed(6))+" "+UnitTo)
                break;
              case "m^3": 
                let mc = UnitValue * 0.0004731765
                setConvertedValue(parseFloat(mc.toFixed(6))+" "+UnitTo)
                break;
              case "ft^3": 
                let ft = UnitValue * 0.0167100694
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "gal": 
            switch (UnitTo){
              case "ml": 
                let ml = UnitValue * 3785.411784
                setConvertedValue(parseFloat(ml.toFixed(6))+" "+UnitTo)
                break;
              case "l":
                let l = UnitValue * 3.785411784
                setConvertedValue(parseFloat(l.toFixed(6))+" "+UnitTo)
                break;
              case "cup": 
                let cup = UnitValue * 16
                setConvertedValue(parseFloat(cup.toFixed(6))+" "+UnitTo)
                break;
              case "pt": 
                let pt = UnitValue * 8
                setConvertedValue(parseFloat(pt.toFixed(6))+" "+UnitTo)
                break;
              case "m^3": 
                let mc = UnitValue * 0.0037854118
                setConvertedValue(parseFloat(mc.toFixed(6))+" "+UnitTo)
                break;
              case "ft^3": 
                let ft = UnitValue * 0.1336805556
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "m^3": 
            switch (UnitTo){
              case "ml": 
                let ml = UnitValue * 1000000
                setConvertedValue(parseFloat(ml.toFixed(6))+" "+UnitTo)
                break;
              case "l":
                let l = UnitValue * 1000
                setConvertedValue(parseFloat(l.toFixed(6))+" "+UnitTo)
                break;
              case "cup": 
                let cup = UnitValue * 4226.7528377
                setConvertedValue(parseFloat(cup.toFixed(6))+" "+UnitTo)
                break;
              case "pt": 
                let pt = UnitValue * 2113.3764189
                setConvertedValue(parseFloat(pt.toFixed(6))+" "+UnitTo)
                break;
              case "gal": 
                let gal = UnitValue * 264.17205236
                setConvertedValue(parseFloat(gal.toFixed(6))+" "+UnitTo)
                break;
              case "ft^3": 
                let ft = UnitValue * 35.314666721
                setConvertedValue(parseFloat(ft.toFixed(6))+" "+UnitTo)
                break;
              default: setConvertedValue(UnitValue+" "+UnitTo)
                break;
            }
            break;
          case "ft^3": 
            switch (UnitTo){
              case "ml": 
                let ml = UnitValue * 28316.846592
                setConvertedValue(parseFloat(ml.toFixed(6))+" "+UnitTo)
                break;
              case "l":
                let l = UnitValue * 28.316846592
                setConvertedValue(parseFloat(l.toFixed(6))+" "+UnitTo)
                break;
              case "cup": 
                let cup = UnitValue * 119.68831169
                setConvertedValue(parseFloat(cup.toFixed(6))+" "+UnitTo)
                break;
              case "pt": 
                let pt = UnitValue * 59.844155844
                setConvertedValue(parseFloat(pt.toFixed(6))+" "+UnitTo)
                break;
              case "gal": 
                let gal = UnitValue * 7.4805194805
                setConvertedValue(parseFloat(gal.toFixed(6))+" "+UnitTo)
                break;
              case "m^3": 
                let mc = UnitValue * 0.0283168466
                setConvertedValue(parseFloat(mc.toFixed(6))+" "+UnitTo)
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
        <div className="volume" id="volume">
        <div className="content">
          <h1>VOLUME CONVERSION</h1>
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
                      <MenuItem value={"ml"}>Milliliter</MenuItem>
                      <MenuItem value={"l"}>Liter</MenuItem>
                      <MenuItem value={"cup"}>Cup</MenuItem>
                      <MenuItem value={"pt"}>Pint</MenuItem>
                      <MenuItem value={"gal"}>Gallon</MenuItem>
                      <MenuItem value={"m^3"}>Cubic Meter</MenuItem>
                      <MenuItem value={"ft^3"}>Cubic Feet</MenuItem>
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
                        <MenuItem value={"ml"}>Milliliter</MenuItem>
                        <MenuItem value={"l"}>Liter</MenuItem>
                        <MenuItem value={"cup"}>Cup</MenuItem>
                        <MenuItem value={"pt"}>Pint</MenuItem>
                        <MenuItem value={"gal"}>Gallon</MenuItem>
                        <MenuItem value={"m^3"}>Cubic Meter</MenuItem>
                        <MenuItem value={"ft^3"}>Cubic Feet</MenuItem>
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

export default Volume