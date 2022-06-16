import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

function MuiTextField() {
    const [value, setValue] = useState('');
  return (
    <div>
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label ='Name' variant="outlined"/>
                <TextField label ='Name' variant="filled"/>
                <TextField label ='Name' variant="standard"/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label = 'Small one' size="small" color="secondary"/>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <TextField label='Name' required 
                value={value}
                 onChange={(e) => setValue(e.target.value)}
                 error={!value}
                 helperText={!value ? 'Required' : 'Do not share your password with anyone'}
                 />
                <TextField label='Password' helperText='Do not share your cvv' type='password' disabled/>
                <TextField label='Read only' inputProps={{readOnly : true}}/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='amount' InputProps={{
                    startAdornment : <InputAdornment position="start">$</InputAdornment>
                }}/>
                <TextField label='weight' InputProps={{
                    endAdornment : <InputAdornment position='end'>Kg</InputAdornment>
                }}/>

            </Stack>

        </Stack>
    </div>
  )
}

export default MuiTextField