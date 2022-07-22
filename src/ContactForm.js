// Your form should meet the following requirements:

//     The form should have three fields: name, email, and phone with an "Add Contact" button.
//     Clicking on the "Add Contact" button invokes an onContactAdded callback function that is passed in via a prop.
//     It does not throw an error if the onContactAdded prop is undefined.

import React from "react";
import { Button, Form } from "react-bootstrap";

function OnContactAdded() {
    alert('Contact Added!')
}

function ContactForm(props) {


    return (
        <Form role="form">
            <Form.Group className="mb-3" data-testId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" data-testId="inputname" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={OnContactAdded}>Add Contact</Button>
        </Form>
    )
}
export default ContactForm

// snapshot test