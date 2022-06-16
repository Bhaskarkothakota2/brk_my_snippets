import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

function MuiBredCrums() {
  return (
    <Box m={8}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        maxItems={2}
        itemsBeforeCollapse={2}
      >
        <Link underline="none" href="#">
          Home
        </Link>
        <Link underline="none" href="#">
          Catalog
        </Link>
        <Link underline="none" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default MuiBredCrums;
