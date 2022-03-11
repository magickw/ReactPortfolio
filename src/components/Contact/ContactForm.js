import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Enter your message"
          name="message"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;