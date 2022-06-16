import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

function MuiRating() {
  const [value, setValue] = useState<number | null>(null);
  console.log(value);
  const ratingHandler = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={ratingHandler}
        precision={0.5}
        size="large"
        icon = {<Favorite fontSize="inherit" color="error"/>}
        emptyIcon = {<FavoriteBorder fontSize="inherit"/>}
      />
    </Stack>
  );
}

export default MuiRating;
