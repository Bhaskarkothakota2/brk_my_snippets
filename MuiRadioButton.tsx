import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material';
import React, { useState } from 'react';

function MuiRadioButton() {
    const [value, setValue] = useState('');
    console.log({value})
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
  return (
    <Box>
        <FormControl >
            <FormLabel id='job-experience-group-label'>
                Years of experience
            </FormLabel>
            <RadioGroup name='job-experience-group'
             aria-labelledby='job-experience-group-label'
             onChange={handleChange}
             value = {value}
             row
             >
             <FormControlLabel control={<Radio color='secondary'/>}  label='0-2' value='0-2' />
             <FormControlLabel control={<Radio/>}  label='3-5' value='3-5'/>
             <FormControlLabel control={<Radio/>}  label='6-10' value='6-10'/>
            </RadioGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton