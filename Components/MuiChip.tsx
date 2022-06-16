import { Avatar, Chip, Stack } from "@mui/material";
import { Face } from "@mui/icons-material";
import { useState } from "react";

function MuiChip() {
    const [chips, setChips] = useState(['chip1', 'chip2', 'chip3']);
    const handleDelete = (chipToDelete : string) => {
         setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }
  return (
    <Stack direction="row" spacing={2}>
      <Chip label="chip" color="primary" size="medium" icon={<Face />} />
      <Chip
        label="chip-outlined"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="click" color="success" onClick={() => alert("clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("cliked")}
        onDelete={() => alert("delete handler called")}
      />
      {chips.map(chip => <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>)}
    </Stack>
  );
}

export default MuiChip;
