import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import { BookmarkBorder, Bookmark } from "@mui/icons-material";

function MuiCheckBox() {
  const [acceptTnc, setAccptTnc] = useState(false);
  const [skills, setSkills] = useState<String []>([]);
  console.log(skills)
  console.log({ acceptTnc });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccptTnc(e.target.checked);
  };
  const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value)
    if(index === -1 ){
        setSkills([...skills, e.target.value])
    }
    else{
        setSkills(skills.filter((skill) => skill ! === e.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept Terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnc}
          onChange={handleChange}
          
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkills} />}
            />
            <FormControlLabel
              label="CSS"
              control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkills} />}
            />
            <FormControlLabel
              label="Java Script"
              control={<Checkbox value='Js' checked={skills.includes('Js')} onChange={handleSkills} />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
