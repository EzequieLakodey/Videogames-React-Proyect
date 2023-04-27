// React
import React, { useState } from "react";

// Components
import OrderSuccess from "../OrderSuccess/OrderSuccess";

// Material ui
import { Typography, Container, Button, TextField } from "@mui/material";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/FireBaseConfig";

// Formik
import { Formik } from "formik";

// Yup
import * as yup from "yup";

const yupSchema = yup.object({
  name: yup.string().min(2).max(30).required(),
  lastName: yup.string().min(2).max(30).required(),
  city: yup.string().min(2).max(30).required(),
  postalCode: yup.string().min(2).max(30).required(),
  email: yup.string().email().required(),
});

const initialState = {
  name: "",
  lastName: "",
  city: "",
  postalCode: "",
  email: "",
};

const submitForm = async (values, resetform) => {
  const docRef = await addDoc(collection(db, "Orders"), {
    values,
  });
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
    <Formik initialValues={initialState}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        dirty,
      }) => (
        <section>
          <Container sx={{ marginTop: "2rem" }}>
            <Typography variant="h4" component="h6">
              Order Form
            </Typography>
          </Container>

          <form onSubmit={handleSubmit}>
            <Container sx={{ marginTop: "2em" }}>
              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="Name"
                  variant="standard"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Container>

              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="Last name"
                  variant="standard"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </Container>

              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="City"
                  variant="standard"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />
              </Container>

              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="Postal Code"
                  variant="standard"
                  name="postalCode"
                  value={values.postalCode}
                  onChange={handleChange}
                />
              </Container>

              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="Email"
                  variant="standard"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
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
      )}
    </Formik>
  );
};

export default Order;
