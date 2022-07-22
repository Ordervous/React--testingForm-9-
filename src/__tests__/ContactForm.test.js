// Your tests should at least verify the following:

//     All form fields are present on the page.
//     The button is present on the page.
//     Clicking the button invokes the callback. This should be verified using a mock function passed as a prop.
//     Entering text into a form field updates the value of the field.
//     The form renders without an onContactAdded prop.
//     If the markup of the page changes, a snapshot test will fail.

import React from "react";
import ContactForm from '../ContactForm';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'


it('renders without error', () => {
    render(<ContactForm />)
})

afterEach(() => {
    jest.restoreAllMocks()
})

it('checks for a button on the page', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', {name: "Add Contact"})).toBeInTheDocument()
})

it('checks for a form on the page', () => {
    render(<ContactForm />)
    expect(screen.getByRole('form')).toBeInTheDocument()
})

it('displays the alert when the Add Contact button is clicked', () => {
    window.alert = jest.fn()
    render(<ContactForm />)
    const button = screen.getByRole('button', { name: "Add Contact" })
    fireEvent.click(button)
    expect(window.alert).toHaveBeenCalledTimes(1)
}) 

// Testing Input fields
it('test input Name field', () => {
    render(<ContactForm />)
    const inputname = screen.getByTestId("formBasicName")
    expect(inputname).toBeInTheDocument()
})

it('pass in text to Name input field', () => {
    render(<ContactForm />)
    const inputname = screen.getByTestId("inputname")
    userEvent.type(inputname, "Joe")

    expect(screen.getByTestId("inputname")).toHaveValue("Joe");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
})

it('pass in text to Name input field2', () => {
    render(<ContactForm />)
    const input = screen.getByTestId("inputname")
    fireEvent.change(input, { target: { value: 'John' } })
    expect(input.value).toBe('John')
})

it('if OnContactAdded props is undefined', () => {
    window.alert = jest.fn()
    render(<ContactForm />)
    const unprops = screen.queryByText('undefined')
    expect(unprops).not.toBeInTheDocument()
})
 

it('should match the snapshot', () => {
    const spy = jest.spyOn(Date, 'now')
      .mockImplementation(() => new Date('2021-01-01T00:00')
    )
    const { asFragment } = render(<ContactForm />)
    const html = asFragment()
    expect(html).toMatchSnapshot()
  })