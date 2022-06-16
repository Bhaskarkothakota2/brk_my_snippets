import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type skill = {
    id : number,
    label : string
}

const skills = ["html", "css", "java script", "type script", "react"];

const skillsOptions = skills.map((skill, index) => ({
    id : index + 1,
    label : skill
}))

function MuiAutoComplete() {

  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<skill | null>(null);
  console.log(value)
  console.log(skill)
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skills}
        renderInput={(parms) => <TextField {...parms} label='skills'/>}
        value = {value}
        onChange = {(event : any, newValue:string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(parms) => <TextField {...parms} label='skills'/>}
        value = {skill}
        onChange = {(event : any, newValue:skill | null) => setSkill(newValue)}
        
      />
    </Stack>
  );
}

export default MuiAutoComplete;
