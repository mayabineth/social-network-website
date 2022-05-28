import React from "react";
import {
  CardMedia,
  Typography,
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  CardActions,
  Checkbox,
} from "@mui/material";
import { MoreVert, Favorite, FavoriteBorder, Share } from "@mui/icons-material";
function Post() {
  return (
    <Box bgcolor="#bde0fe" flex={1} p={2}>
      <Card sx={{}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="10%"
          image="https://images.pexels.com/photos/11182793/pexels-photo-11182793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Post;
