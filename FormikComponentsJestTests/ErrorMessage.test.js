// myForm.test.js
import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {ErrorMessage} from './ErrorMessage.js'

test("rendering and Showing the error message component", async () => {
    render(<SignUp />)


});
