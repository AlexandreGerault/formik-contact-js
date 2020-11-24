import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextInput from '../FormInputs/TextInput'
import EmailInput from '../FormInputs/EmailInput'
import TextareaInput from '../FormInputs/TextareaInput'
import SubmitButton from '../FormInputs/SubmitButton'

const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values, actions)
  }

  return (
    <Formik
      initialValues={{
        firsname: 'John',
        lastname: 'Doe',
        email: 'john.doe@example.com',
        message: 'The goal of the website is not correct',
      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .min(1, 'Must be at least one character')
          .max(20, 'Cannot exceed 20 characters')
          .required('This field is required'),
        lastname: Yup.string()
          .min(1, 'Must be at least one character')
          .max(20, 'Cannot exceed 20 characters')
          .required('This field is required'),
        email: Yup.string()
          .email('Please provide a valid email address')
          .required('Please provide an email address'),
        message: Yup.string()
          .min(200, 'Your message should be at least 200 characters')
          .max(2000, 'Your message cannot exceed 2000 characters')
          .required('Please provide a message'),
      })}
      onSubmit={handleSubmit}
    >
      <Form className="grid grid-cols-1 gap-y-6">
        <TextInput label="Prénom" placeholder="John" name="firstname" />
        <TextInput label="Nom" placeholder="Doe" name="lastname" />
        <EmailInput
          placeholder="john.doe@example.com"
          name="email"
          label="Email"
        />
        <TextareaInput
          placeholder="Your message goes here"
          name="message"
          label="Votre message"
        />

        <SubmitButton>Contactez-nous</SubmitButton>
      </Form>
    </Formik>
  )
}

export default ContactForm
