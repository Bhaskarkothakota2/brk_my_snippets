import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

function MuiAccordian() {
  const [expanded, setExpanded] = useState<string | false>(false);
  
const handlechange = (isExpanded : boolean, panel : string) => {
     setExpanded(isExpanded ? panel : false)      
}

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handlechange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-controls"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt
            itaque natus commodi repellat rem reprehenderit maxime? Voluptatum
            nesciunt repellat fugiat! Voluptates, impedit fuga accusamus quod
            molestias nostrum illo error.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"}
      onChange={(event, isExpanded) => handlechange(isExpanded, "panel2")}>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-controls"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt
            itaque natus commodi repellat rem reprehenderit maxime? Voluptatum
            nesciunt repellat fugiat! Voluptates, impedit fuga accusamus quod
            molestias nostrum illo error.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"}
      onChange={(event, isExpanded) => handlechange(isExpanded, "panel3")}>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-controls"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt
            itaque natus commodi repellat rem reprehenderit maxime? Voluptatum
            nesciunt repellat fugiat! Voluptates, impedit fuga accusamus quod
            molestias nostrum illo error.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MuiAccordian;
