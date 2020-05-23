import React, {useState} from 'react'
import {ErrorDisplay} from './subComponents'
import {useFormik} from 'formik'

export default function() {
  const [errors, setErrors] = useState({})

  const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Name is required'
    }
    return errors
  }

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate,
    onSubmit: values => {
      console.log('submit')
      console.log(JSON.stringify(values, null, 2))
    },
  })

  const validateErrors = e => {
    e.preventDefault()
    const {name} = e.target.elements

    if (!name.value) {
      setErrors({name: 'Name is Required'})
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" />

      <ErrorDisplay errorMessage={formik.errors.name} />
      <button type="submit">Submit</button>
    </form>
  )
}
