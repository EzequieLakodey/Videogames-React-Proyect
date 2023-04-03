import { useState } from "react";

import React from "react";

import IconButton from "@mui/material/IconButton";

import AddIcon from "@mui/icons-material/Add";

import RemoveIcon from "@mui/icons-material/Remove";

import TextField from "@mui/material/TextField";

const ItemsCounter = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count <= stock) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div>
        <IconButton onClick={remove}>
          <RemoveIcon fontSize="large" />
        </IconButton>

        <TextField
          id="filled-basic"
          label="Quantity"
          placeholder="0"
          variant="filled"
          disabled
          sx={{ width: "0.3" }}
        />

        <IconButton onClick={add}>
          <AddIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemsCounter;
