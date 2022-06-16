import { Avatar, Stack, AvatarGroup } from "@mui/material";



function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={2}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="Jane doe2"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" , width : 48,  height : 48}}  variant = 'square'>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light", width : 48,  height : 48 }} variant = 'rounded'>CK</Avatar>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
