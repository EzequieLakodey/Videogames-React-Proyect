// React
import React, { useState } from "react";

// Components
import OrderSuccess from "../OrderSuccess/OrderSuccess";

// Material ui
import { Typography, Container, Button, TextField } from "@mui/material";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/FireBaseConfig";

const initialState = {
  name: "",
  lastName: "",
  city: "",
  postalCode: "",
  email: "",
};

const Order = () => {
  const [orderValues, setOrderValues] = useState(initialState);
  const [orderID, setOrderID] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setOrderValues({ ...orderValues, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "Orders"), {
      orderValues,
    });
    setOrderID(docRef.id);
    setOrderValues(initialState);
  };

  return (
    <section>
      <Container sx={{ marginTop: "2rem" }}>
        <Typography variant="h4" component="h6">
          Order Form
        </Typography>
      </Container>

      <form onSubmit={onSubmit}>
        <Container sx={{ marginTop: "2em" }}>
          <Container sx={{ marginTop: "2em" }}>
            <TextField
              label="Name"
              variant="standard"
              placeholder="name"
              name="name"
              value={orderValues.name}
              onChange={onChange}
            />
          </Container>

          <Container sx={{ marginTop: "2em" }}>
            <TextField
              label="Last name"
              variant="standard"
              name="lastName"
              value={orderValues.lastName}
              onChange={onChange}
            />
          </Container>

          <Container sx={{ marginTop: "2em" }}>
            <TextField
              label="City"
              variant="standard"
              name="city"
              value={orderValues.city}
              onChange={onChange}
            />
          </Container>

          <Container sx={{ marginTop: "2em" }}>
            <TextField
              label="Postal Code"
              variant="standard"
              name="postalCode"
              value={orderValues.postalCode}
              onChange={onChange}
            />
          </Container>

          <Container sx={{ marginTop: "2em" }}>
            <TextField
              label="Email"
              variant="standard"
              name="email"
              value={orderValues.email}
              onChange={onChange}
            />
          </Container>

          <Container sx={{ marginTop: "2em" }}>
            <Button variant="contained" color="secondary" type="submit">
              Order
            </Button>
          </Container>
        </Container>
      </form>

      {orderID.length ? (
        <Container
          sx={{
            width: "25rem",
            marginTop: "2em",
          }}>
          <OrderSuccess orderID={orderID} />
        </Container>
      ) : null}
    </section>
  );
};

export default Order;
