// React
import React, { useState, useContext } from "react";

// Context
import { CartContext } from "../../contexts/CartContext";

// Components
import OrderSuccess from "../OrderSuccess/OrderSuccess";

// Material ui
import {
  Typography,
  Container,
  Button,
  TextField,
  Alert,
  Stack,
} from "@mui/material";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/FireBaseConfig";

// Formik
import { Formik } from "formik";

// Yup
import * as yup from "yup";

/* Imports */

const yupSchema = yup.object({
  name: yup.string().min(4).max(20).required(),
  lastName: yup.string().min(4).max(20).required(),
  city: yup.string().min(4).max(20).required(),
  postalCode: yup.string().min(4).max(20).required(),
  email: yup.string().email().required(),
});

const initialState = {
  name: "",
  lastName: "",
  city: "",
  postalCode: "",
  email: "",
};

const Order = () => {
  const { setCart } = useContext(CartContext);
  const [orderID, setOrderID] = useState("");

  const submitForm = async (values, resetform) => {
    const docRef = await addDoc(collection(db, "Orders"), {
      values,
    });
    setOrderID(docRef.id);
    resetform();
    setCart([]);
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, { resetForm }) => submitForm(values, resetForm)}
      validationSchema={yupSchema}>
      {({ values, errors, handleChange, handleSubmit, isValid, dirty }) => (
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
                  onChange={handleChange}></TextField>
              </Container>

              {errors.name && (
                <Container sx={{ width: "25em", mt: "1em" }}>
                  <Stack>
                    <Alert variant="outlined" severity="error">
                      {errors.name}
                    </Alert>
                  </Stack>
                </Container>
              )}

              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="Last name"
                  variant="standard"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </Container>

              {errors.lastName && (
                <Container sx={{ width: "25em", mt: "1em" }}>
                  <Stack>
                    <Alert variant="outlined" severity="error">
                      {errors.lastName}
                    </Alert>
                  </Stack>
                </Container>
              )}

              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="City"
                  variant="standard"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />
              </Container>

              {errors.city && (
                <Container sx={{ width: "25em", mt: "1em" }}>
                  <Stack>
                    <Alert variant="outlined" severity="error">
                      {errors.city}
                    </Alert>
                  </Stack>
                </Container>
              )}

              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="Postal Code"
                  variant="standard"
                  name="postalCode"
                  value={values.postalCode}
                  onChange={handleChange}
                />
              </Container>

              {errors.postalCode && (
                <Container sx={{ width: "25em", mt: "1em" }}>
                  <Stack>
                    <Alert variant="outlined" severity="error">
                      {errors.postalCode}
                    </Alert>
                  </Stack>
                </Container>
              )}

              <Container sx={{ marginTop: "2em" }}>
                <TextField
                  label="Email"
                  variant="standard"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </Container>

              {errors.email && (
                <Container sx={{ width: "25em", mt: "1em" }}>
                  <Stack>
                    <Alert variant="outlined" severity="error">
                      {errors.email}
                    </Alert>
                  </Stack>
                </Container>
              )}

              <Container sx={{ marginTop: "2em" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={!(isValid && dirty)}>
                  Submit order
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
