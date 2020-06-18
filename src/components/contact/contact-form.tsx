import React, { useState } from "react"
import { API, graphqlOperation } from "aws-amplify"

import {
  Form,
  FormField,
  MaskedInput,
  TextInput,
  TextArea,
  Box,
  Button,
  Heading,
} from "grommet"
import { MailOption, User } from "grommet-icons"

import { createContact as CreateContact } from "../../graphql/mutations.ts"

interface Props {
  type?: string
  message?: string
}

const defaultValues = {
  name: "",
  email: "",
  message: "",
}

const ContactForm = ({ type, message }: Props) => {
  const [value, setValue] = useState(defaultValues)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  async function submitContact(event) {
    try {
      const contactInfo = {
        type: type,
        contactList: type === "mailList" ? true : false,
        ...event.value,
      }

      const createContact = await API.graphql(
        graphqlOperation(CreateContact, { input: contactInfo })
      )
      setSuccess(createContact)
    } catch (error) {
      setError(`There was an error, please email us directly @`)
      console.log("error: ", error)
    }
  }

  if (success) {
    return (
      <Box>
        {`${success.data.createContact.name}, we got your message and will be in touch!`}
      </Box>
    )
  }

  return (
    <Form
      value={value}
      onChange={nextValue => setValue(nextValue)}
      onReset={() => setValue(defaultValues)}
      onSubmit={submitContact}
    >
      {message && <Heading level={3}>{message}</Heading>}
      <FormField label="Name" name="name" required>
        <TextInput name="name" icon={<User size="small" />} reverse />
      </FormField>
      <FormField label="Email" name="email" required>
        <MaskedInput
          name="email"
          icon={<MailOption size="small" />}
          reverse
          mask={[
            { regexp: /^[\w\-_.]+$/, placeholder: "example" },
            { fixed: "@" },
            { regexp: /^[\w]+$/, placeholder: "my" },
            { fixed: "." },
            { regexp: /^[\w]+$/, placeholder: "com" },
          ]}
        />
      </FormField>
      <FormField label="Message" name="message" required>
        <TextArea name="message" size="xlarge" />
      </FormField>
      <Box direction="row" gap="small">
        <Button type="reset" label="Reset" />
        <Button type="submit" primary label="Send" />
      </Box>
      {success && (
        <Box>
          <pre>{JSON.stringify(success, null, 2)}</pre>
        </Box>
      )}
      {error && <Box>{error}</Box>}
    </Form>
  )
}

export default ContactForm
