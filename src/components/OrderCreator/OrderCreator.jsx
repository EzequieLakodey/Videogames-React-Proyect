// React
import { useState, useContext } from 'react'

// Context
import { CartContext } from '../../contexts/CartContext'

// Components
import OrderSuccess from '../OrderSuccess/OrderSuccess'

// Material ui
import { Typography, Container, Box, Button, TextField } from '@mui/material'

// Firebase
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase/FireBaseConfig'

// Formik
import { Field, Formik } from 'formik'

// Yup
import * as yup from 'yup'

/* Imports */

const validationMessages = (fieldName, min, max) => {
  return {
    required: `${fieldName} is required`,
    min: `${fieldName} must be at least ${min} characters`,
    max: `${fieldName} must be at most 4{max} characters`,
    email: `${fieldName} is not valid`,
  }
}

const yupSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, validationMessages('Name', 4, 20).min)
    .max(20, validationMessages('Name', 4, 20).max)
    .required(validationMessages('Name', 4, 20).required),
  lastName: yup
    .string()
    .min(4, validationMessages('Last name', 4, 20).min)
    .max(20, validationMessages('Last name', 4, 20).max)
    .required(validationMessages('Last name', 4, 20).required),
  city: yup
    .string()
    .min(4, validationMessages('City', 4, 20).min)
    .max(20, validationMessages('City', 4, 20).max)
    .required(validationMessages('City', 4, 20).required),
  postalCode: yup
    .string()
    .min(4, validationMessages('Postal Code', 4, 20).min)
    .max(20, validationMessages('Postal Code', 4, 20).max)
    .required(validationMessages('Postal Code', 4, 20).required),
  email: yup
    .string()
    .email(validationMessages('Email', null, null).email)
    .required(validationMessages('Email', null, null).required),
})

const renderFormFields = (fields, values, handleChange, errors) => {
  return fields.map(({ name, label }) => {
    return (
      <div key={name}>
        <Field name={name}>
          {({ field, meta }) => (
            <div>
              <TextField
                className='form-inputs'
                label={label}
                variant='standard'
                {...field}
                onChange={field.onChange}
                error={!!(meta.touched && meta.error)}
                helperText={meta.touched && meta.error}
              />
              {!!(meta.touched && meta.error)}
            </div>
          )}
        </Field>
      </div>
    )
  })
}

const initialState = {
  name: '',
  lastName: '',
  city: '',
  postalCode: '',
  email: '',
}
const formFields = [
  { name: 'name', label: 'Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'email', label: 'E-mail' },
  { name: 'postalCode', label: 'Postal Code' },
  { name: 'city', label: 'City' },
]

const Order = () => {
  const { setCart } = useContext(CartContext)
  const [orderID, setOrderID] = useState('')

  const handleSubmit = async (values, { resetForm }) => {
    const docRef = await addDoc(collection(db, 'Orders'), values)
    setOrderID(docRef.id)
    resetForm()
    setCart([])
  }

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={yupSchema}>
      {({ values, errors, handleChange, handleSubmit, isValid, dirty }) => (
        <section>
          <Container className='form-title-container'>
            <Typography variant='h4' component='h6'>
              Order Form
            </Typography>
          </Container>
          <form onSubmit={handleSubmit}>
            <Box className='form-inputs-container'>
              {renderFormFields(formFields, values, handleChange, errors)}

              <Button
                className='form-inputs'
                variant='contained'
                color='secondary'
                type='submit'
                disabled={!(isValid && dirty)}>
                Submit order
              </Button>
            </Box>
          </form>

          {orderID.length ? (
            <Box className='order-id-alert'>
              <OrderSuccess orderID={orderID} />
            </Box>
          ) : null}
        </section>
      )}
    </Formik>
  )
}

export default Order
