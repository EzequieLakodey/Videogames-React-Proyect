import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Cards.css";

const Cards = ({ image, name, year, pegi, platform }) => {
  return (
    <div className="games-section d-flex justify-content-between">
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia component="img" height="250" image={image} />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {year}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              PEGI {pegi}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {platform}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Cards;
