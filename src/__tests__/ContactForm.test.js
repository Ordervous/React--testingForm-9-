// Your tests should at least verify the following:

//     All form fields are present on the page.
//     The button is present on the page.
//     Clicking the button invokes the callback. This should be verified using a mock function passed as a prop.
//     Entering text into a form field updates the value of the field.
//     The form renders without an onContactAdded prop.
//     If the markup of the page changes, a snapshot test will fail.

import React from "react";
import { Form } from "react-bootstrap";
import ContactForm from './ContactForm';
import { fireEvent, render, screen } from '@testing-library/react';


it('renders without error', () => {
    render(<ContactForm />)
})



afterEach(() => {
    jest.restoreAllMocks()
})