import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xzboaajb");
  if (state.succeeded) {
      return <p>Thank you! We'll be in touch soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h5 className="form-group-heading text-left">Name</h5>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
      <h5 className="form-group-heading text-left">Email</h5>
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          className="form-control"
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className="form-group">
      <h5 className="form-group-heading text-left">Message</h5>
        <textarea
          placeholder="Enter your message"
          name="message"
          className="form-control"
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          type="submit"
          disabled={state.submitting}
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;