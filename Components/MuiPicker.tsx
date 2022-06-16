
// import { Stack, TextField } from '@mui/material'
// import {  StaticDatePicker } from '@mui/lab'
// import { useState } from 'react'
// import { isWeekend } from 'date-fns';

// function MuiPicker() {
//     const [value, setValue] = useState<Date | null>(null);
//     console.log(value);
//   return (
//     <Stack spacing={4} sx={{width:'250px'}}>
       
//      <StaticDatePicker<Date>
//             orientation="landscape"
//             openTo="day"
//             value={value}
//             shouldDisableDate={isWeekend}
//             onChange={(newValue) => {
//             setValue(newValue);
//             }}
//             renderInput={(params) => <TextField {...params} />}
//   />

//     </Stack>
//   )
// }

// export default MuiPicker




import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState<Date | null>(null);

  alert(value);
  
  

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        inputFormat="MM/dd/yyyy"
        onChange={(newValue) => {
          setValue(newValue);
        
        }}
        renderInput={(params) => <TextField {...params} />}
        
      />
    </LocalizationProvider>
  );


    }