import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitted");
    // TODO: wire to real endpoint or email service
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label className="form-field">
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <label className="form-field">
        <span>Message</span>
        <textarea name="message" rows={4} required />
      </label>
      <button type="submit" className="primary-button">
        Send
      </button>
      {status === "submitted" && (
        <p className="text-body contact-confirmation">
          Thank you for reaching out — I’ll get back to you soon.
        </p>
      )}
    </form>
  );
}
