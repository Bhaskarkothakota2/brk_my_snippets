import { Badge, Stack } from "@mui/material";
import { Mail } from "@mui/icons-material";


function MuiBadge() {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={5} color='primary'>
          <Mail/>
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
          <Mail/>
        </Badge>
        <Badge badgeContent={100} color='success' max={50}>
          <Mail/>
        </Badge>
        <Badge badgeContent={5} color='primary' variant="dot">
          <Mail/>
        </Badge>

    </Stack>
  )
}

export default MuiBadge