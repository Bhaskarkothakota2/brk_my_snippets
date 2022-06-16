import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import { FormatUnderlined, FormatBold} from "@mui/icons-material";
import { FormatItalic } from "@mui/icons-material";
import React, { useState } from "react";





const MuiButton = () => {
    const [formats, setFormats] = useState<String[]>([]);
    const handleFormatChange = (_event:React.MouseEvent<HTMLElement>, updatedFormats: String[]) => {
        
    }
  return (
      <Stack spacing={4}>
    <Stack spacing={4}  direction = 'row'>
        <Button variant="text" href = 'https://google.com'>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">outlined</Button>
    </Stack>
    <Stack spacing={4} direction='row'>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="warning">Primary</Button>
    </Stack>
    <Stack display='block' spacing={2} direction='row'>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Meadium</Button>
        <Button variant="contained" size="large">Large</Button>

    </Stack>
    <Stack spacing={2} direction='row'>
        <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableFocusRipple>Send</Button>
        <IconButton aria-label="send" color="success" size='large'>
            <SendIcon></SendIcon>
        </IconButton>
    </Stack>
    <Stack direction='row'>
      <ButtonGroup variant="contained" orientation="vertical" color="secondary">
        <Button onClick={() => alert('left button clicked')}>Left</Button>
        <Button >Center</Button>
        <Button >Right</Button>
      </ButtonGroup>
    </Stack>
    <Stack direction='row' >
        <ToggleButtonGroup aria-label="text formatting" onChange={handleFormatChange}>
            <ToggleButton value='bold' aria-label="bold"><FormatBold></FormatBold></ToggleButton>
            <ToggleButton value='italic' aria-label="italic"><FormatItalic></FormatItalic></ToggleButton>
            <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlined></FormatUnderlined></ToggleButton>
        </ToggleButtonGroup>
    </Stack>
   
    </Stack>
    
  )
}

export default MuiButton;