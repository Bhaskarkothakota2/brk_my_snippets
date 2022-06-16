import { Box, Stack, Divider, Grid,  Paper } from "@mui/material";

function MuiLayout() {
  return (
    <Paper sx={{padding : '32px'}} elevation={4}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Bhaskar kothakota
        </Box>
        <Box
          display="flex"
          height="132px"
          width="132px"
          bgcolor="success.light"
        ></Box>
      </Stack>
      <Grid container my={4} spacing={2}>
        <Grid item xs sm={12}>
          <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid >
        <Grid item xs sm={12}>
          <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs sm={12}>
          <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item xs sm={12}>
          <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MuiLayout;
