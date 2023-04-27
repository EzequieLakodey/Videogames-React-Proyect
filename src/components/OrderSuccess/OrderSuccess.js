// React
import React from "react";

// Material Ui
import { Alert, Stack } from "@mui/material";

/* Imports */

const OrderSuccess = ({ orderID }) => {
  return (
    <>
      <Stack>
        <Alert>Thanks for your purchase! Order ID: {orderID}</Alert>
      </Stack>
    </>
  );
};

export default OrderSuccess;
