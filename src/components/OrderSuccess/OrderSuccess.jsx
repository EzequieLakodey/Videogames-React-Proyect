// Material Ui
import { Alert, Stack } from '@mui/material';

// PropTypes
import PropTypes from 'prop-types';

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

OrderSuccess.propTypes = {
    orderID: PropTypes.string.isRequired,
};

export default OrderSuccess;
