// myForm.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from "./ErrorMessage.js";

test("rendering and Showing the error message component", async () => {
  const handleSubmit= jest.fn()
    render(<SignUp  onSubmit={handleSubmit}/>)
    const user = userEvent.setUp()

 //in the test we should check to see if the value is null
 //we need to check if SignUpSchema function runs
 //Check all the props of the formik component
// in the formik component itself we have multiple components
//
expect(await screen.findByText('Jane')).toBeVisible()
expect(await screen.findByText('Doe')).toBeVisible()
expect(await screen.findByText('jane@acme.com')).toBeVisible()

await user.type(screen.getByLabelText(/first name/i), 'Jane')
await user.type(screen.getByLabelText(/last name/i), 'Doe')
await user.type(screen.getByLabelText(/email/i), 'jane@acme.com')

await user.click(screen.getByRole('button', {name: /Submit/i}))


await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({

      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
    }),
  )

})
