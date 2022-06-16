import { Box, TextField, MenuItem} from "@mui/material";
import React, { useState } from "react";


export const SelectPractice = () => {
  const [country, setCountry] = useState('');
  console.log({country})
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    
    setCountry(event.target.value)
    
  }
  return (
    <Box width='250px'>
      <TextField label='select Country' select value={country} onChange={handleChange} fullWidth color="secondary">
       
        <MenuItem value='India'>India</MenuItem>
        <MenuItem value='USA'>USA</MenuItem>
        <MenuItem value='Asutralia'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}
