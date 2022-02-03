import React, { useState } from "react";
import './NumSys.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material'

export default function NumSys() {

  const [UnitFrom, setUnitFrom] = useState('')
  const [UnitTo, setUnitTo] = useState('')
  const [UnitValue, setUnitValue] = useState()
  const [UnitValueError, setUnitValueError] = useState(false)
  const [ConvertedValue, setConvertedValue] = useState("")

  const handleChangeUnitFrom = (event) => {
      setUnitFrom(event.target.value);
    };
  const handleChangeUnitTo = (event) => {
      setUnitTo(event.target.value);
  }

  let t = "";

  const handleSubmit = (e) => {
    e.preventDefault()

    if (UnitValueError === 0){
      setUnitValueError(true)
    }

    if (UnitValue && UnitFrom && UnitTo){
      switch (UnitFrom) {
        case "Decimal": 
          switch (UnitTo){
            case "Binary": 
              let b = parseInt(UnitValue);
              t = b.toString(2)
              setConvertedValue(t)
              break;
            case "Hexadecimal":
              let h = parseInt(UnitValue)
              t = h.toString(16).toUpperCase()
              setConvertedValue(t)
              break;
            case "Octal":
              let o = parseInt(UnitValue)
              t = o.toString(8).toUpperCase()
              setConvertedValue(t)
              break;
            default: setConvertedValue(UnitValue)
              break;
          }
          break;
        case "Binary": 
          switch (UnitTo){
            case "Decimal": 
              t = parseInt(UnitValue, 2)
              setConvertedValue(t)
              break;
            case "Hexadecimal":
              t = parseInt(UnitValue, 2)
              let h = t.toString(16).toUpperCase()
              setConvertedValue(h)
              break;
            case "Octal":
              t = parseInt(UnitValue, 2)
              let o = t.toString(8).toUpperCase()
              setConvertedValue(o)
              break;
            default: setConvertedValue(UnitValue)
              break;
          }
          break;
        case "Hexadecimal": 
          switch (UnitTo){
            case "Decimal": 
              t = parseInt(UnitValue, 16)
              setConvertedValue(t)
              break;
            case "Binary":
              t = parseInt(UnitValue, 16)
              let b = t.toString(2).toUpperCase()
              setConvertedValue(b)
              break;
            case "Octal":
              t = parseInt(UnitValue, 16)
              let o = t.toString(8).toUpperCase()
              setConvertedValue(o)
              break;
            default: setConvertedValue(UnitValue)
              break;
          }
          break;
          case "Octal": 
            switch (UnitTo){
              case "Decimal":
                t = parseInt(UnitValue, 8)
                setConvertedValue(t)
                break;
              case "Binary":
                t = parseInt(UnitValue, 8)
                let b = t.toString(2).toUpperCase()
                setConvertedValue(b)
                break;
              case "Hexadecimal":
                t = parseInt(UnitValue, 8)
                let h = t.toString(16).toUpperCase()
                setConvertedValue(h)
                break;
              default: setConvertedValue(UnitValue)
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
        <h1>NUMBER SYSTEM CONVERSION</h1>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className='metric-unit-opt'>
            <div className="metric-unit-opt-container">
              <TextField 
                onChange={(e) => setUnitValue(e.target.value)}
                placeholder="Enter value"
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
                    <MenuItem value={"Decimal"}>Decimal</MenuItem>
                    <MenuItem value={"Binary"}>Binary</MenuItem>
                    <MenuItem value={"Hexadecimal"}>Hexadecimal</MenuItem>
                    <MenuItem value={"Octal"}>Octal</MenuItem>
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
                      <MenuItem value={"Decimal"}>Decimal</MenuItem>
                      <MenuItem value={"Binary"}>Binary</MenuItem>
                      <MenuItem value={"Hexadecimal"}>Hexadecimal</MenuItem>
                      <MenuItem value={"Octal"}>Octal</MenuItem>
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