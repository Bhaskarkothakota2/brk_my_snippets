import { Alert, AlertTitle, Stack, Button } from "@mui/material";
import { Check } from "@mui/icons-material";

function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is an success alert</Alert>

      <Alert severity="error" variant="outlined">
        This is an error alert
      </Alert>
      <Alert severity="warning" variant="outlined">
        This is an warning alert
      </Alert>
      <Alert severity="info" variant="outlined">
        This is an info alert
      </Alert>
      <Alert severity="success" variant="outlined">
        This is an success alert
      </Alert>

      <Alert
        severity="error"
        variant="filled"
        onClose={() => alert("error is closed")}
       
      >
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert severity="warning" variant="filled">
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
      <Alert severity="info" variant="filled">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        severity="success"
        variant="filled"
        icon={<Check fontSize="inherit" />}
        action = {
            <Button color="inherit" size="small">
                UNDO
            </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
    </Stack>
  );
}

export default MuiAlert;
