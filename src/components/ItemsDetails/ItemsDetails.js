import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ItemsCounter from "../ItemsCounter/ItemsCounter";

const ItemsDetails = ({ itemsDetails }) => {
  const { id, title, description, price, image, category } = itemsDetails;

  const onAdd = (quantity) => {
    alert(`${quantity} ${title}, added to cart`);
  };
  return (
    <Card sx={{ maxWidth: 1 }}>
      <CardMedia component="img" alt={title} height="1" image={image} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
          {description}
        </Typography>
      </CardContent>

      <ItemsCounter initial={1} onAdd={onAdd} />
    </Card>
  );
};

export default ItemsDetails;
