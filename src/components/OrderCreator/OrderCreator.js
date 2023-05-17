// React
import { useState, useContext } from 'react'

// Context
import { CartContext } from '../../contexts/CartContext'

// Components
import OrderSuccess from '../OrderSuccess/OrderSuccess'

// Material ui
import { Typography, Container, Box, Button, TextField, Alert, Stack } from '@mui/material'

// Firebase
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase/FireBaseConfig'

// Formik
import { Field, Formik } from 'formik'

// Yup
import * as yup from 'yup'

/* Imports */

const yupSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name must be at least 4 characters')
    .max(20, 'Name must be at most 20 characters')
    .required('Name is required'),
  lastName: yup
    .string()
    .min(4, 'Last name must be at least 4 characters')
    .max(20, 'Last name must be at most 20 characters')
    .required('Last name is required'),
  city: yup
    .string()
    .min(4, 'City must be at least 4 characters')
    .max(20, 'City must be at most 20 characters')
    .required('City is required'),
  postalCode: yup
    .string()
    .min(4, 'Postal code must be at least 4 characters')
    .max(20, 'Postal code must be at most 20 characters')
    .required('Postal code is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
})

const initialState = {
  name: '',
  lastName: '',
  city: '',
  postalCode: '',
  email: '',
}

const renderFormFields = (fields, values, handleChange, errors, index, fieldName) => {
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
                onChange={handleChange}
                error={meta.touched && meta.error}
                helperText={meta.touched && meta.error}
              />
              {!!(meta.touched && meta.error)}
              <Container key={index} sx={{ width: '25em', mt: '1em' }}>
                <Stack>
                  <Alert variant='outlined' severity='error'>
                    {errors[name]?.message}
                  </Alert>
                </Stack>
              </Container>
            </div>
          )}
        </Field>
      </div>
    )
  })
}

const Order = () => {
  const { setCart } = useContext(CartContext)
  const [orderID, setOrderID] = useState('')

  const formFields = [
    { name: 'name', label: 'Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'email', label: 'E-mail' },
    { name: 'postalCode', label: 'Postal Code' },
    { name: 'city', label: 'City' },
  ]

  const handleSubmit = async (values, { resetForm }) => {
    const docRef = await addDoc(collection(db, 'Orders'), values)
    setOrderID(docRef.id)
    resetForm()
    setCart([])
  }

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={yupSchema}>
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
            <Container
              sx={{
                width: '25rem',
                marginTop: '2em',
              }}>
              <OrderSuccess orderID={orderID} />
            </Container>
          ) : null}
        </section>
      )}
    </Formik>
  )
}

export default Order
