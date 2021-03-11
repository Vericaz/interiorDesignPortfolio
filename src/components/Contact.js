import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_QQihXXCVKMC83ohUIKSJN";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        lastname: data.lastname,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  function sendEmail(serviceID, templateID, variables, userID) {
    emailjs.send(serviceID, templateID, variables, userID).then(() => {
      setSuccessMessage(
        "Your message was sent successfully! I will contact you as soon as possible! Thanks :)"
      );
    });
  }

  return (
    <div className="contact">
      <h1>Contact me</h1>
      <p>
        Feel free to contact me for any questions or more information! You can
        fill out the form and describe your need or idea and I will contact you
        as soon as possible! Thank you!
      </p>
      {successMessage}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="ex. Jane"
            ref={register({
              required: true,
            })}
          />
          {errors.name && "First name is required"}
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            placeholder="ex. Doe"
            ref={register({
              required: true,
            })}
          />
          {errors.lastname && "Last name is required"}
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="ex. +38975123123"
            ref={register({
              required: true,
            })}
          />
          {errors.phone && "Phone number is required"}
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="ex. jane@email.com"
            ref={register({
              required: true,
              //   pattern: {
              //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,}$/i,
              //     message: "invalid email",
              //   },
            })}
          />
          {errors.email && "Email is required"}
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            ref={register({
              required: TextTrackCue,
            })}
          />
          {errors.subject && "Subject is required"}
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            placeholder="your text here"
            name="description"
            as="textarea"
            rows={3}
            ref={register({
              required: true,
            })}
          />
          {errors.description && "Message is required"}
        </Form.Group>
        <Button variant="light" type="submit">
          Contact me
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
