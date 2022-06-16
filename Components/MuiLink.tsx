import { Link, Stack, Typography } from "@mui/material"


function MuiLink() {
  return (
    <Stack direction='row' spacing={2} m={8}>
          <Link href="#">Link</Link>
          <Typography variant="h6">
          <Link href="#" color='secondary' underline="hover">Link2</Link>
          </Typography>
          
    </Stack>
  )
}

export default MuiLink