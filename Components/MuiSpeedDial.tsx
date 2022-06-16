import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { FileCopyOutlined, Print, Share, Edit } from "@mui/icons-material";

function MuiSpeedDial() {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit/>}/>}

    >
      <SpeedDialAction
        icon={<FileCopyOutlined />}
        tooltipTitle="copy"
        tooltipOpen
      />
      <SpeedDialAction icon={<Print />} tooltipTitle="print" tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle="share" tooltipOpen />
    </SpeedDial>
  );
}

export default MuiSpeedDial;
