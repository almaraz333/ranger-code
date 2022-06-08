import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

import "./Contact.scss";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [contactEmail, setContactEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current !== null) {
      emailjs
        .sendForm("service_qon8dj6", "template_km7m8q9", formRef.current, "Mnw9NGeDA9b2oq0Tq")
        .then(() => {
          setUserName("");
          setUserMessage("");
          setContactEmail("");

          toast.success("Email Sent", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        })
        .catch(() => {
          toast.error("Something went wrong...", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        });
    }
  };

  return (
    <section className="contact-form-container" id="contact">
      <h2>Contact Us</h2>
      <Form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact Email Address</Form.Label>
          <Form.Control
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            type="email"
            placeholder="Email..."
            name="user_email"
            className="contact-form-item"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Name..."
            name="user_name"
            className="contact-form-item"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            as="textarea"
            placeholder="Message..."
            name="message"
            className="contact-form-item"
          />
          <Form.Text className="text-muted">Send us a message about who you are and what your needs are!</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};
