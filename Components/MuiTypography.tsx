import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        <Typography variant="h4" component='h1' gutterBottom>h4 heading</Typography>
        <Typography variant="h5">h5 heading</Typography>
        <Typography variant="h6">h6 heading</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>

        <Typography variant="body1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laboriosam! Porro reprehenderit officia odio doloribus totam perspiciatis aperiam tempore voluptatem voluptatibus, enim id deleniti ducimus impedit! Ducimus illum nisi omnis!
        </Typography>
        <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam corporis accusamus nostrum, aliquid alias officiis fugiat quae tenetur repudiandae minima, voluptatibus quibusdam magnam, eum harum a est sed. Dicta, deserunt!
        </Typography>
    </div>
  )
}
