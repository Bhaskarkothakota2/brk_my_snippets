import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import  { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
       return <Alert elevation={6} ref={ref} {...props}/>
    }
);

function MuiSnackBar() {
  const [open, setopen] = useState(false);

  const handleClose = (event ? : React.SyntheticEvent | Event, reason ? : string) => {
      if(reason === 'clickaway'){
          return
      }
      setopen(false)
  }
  return (
    <>
      <Button onClick={() => setopen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form Submitted Successfully!"
        autoHideDuration={4000}
        open={open}
        onClose = {handleClose}
        anchorOrigin = {{
            vertical : 'bottom',
            horizontal : 'center'
        }}
      /> */}

      {/* Cutom snackbar component */}
      <Snackbar open = {open} autoHideDuration = {6000} onClose = {handleClose}>
         <SnackbarAlert onClose={handleClose} severity='success'>
             Form Submitted Successfully!
         </SnackbarAlert>
      </Snackbar>
    </>
  );
}

export default MuiSnackBar;
