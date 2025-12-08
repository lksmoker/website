import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Simple JS object state (no TypeScript syntax)
  const [status, setStatus] = useState({
    type: "idle", // "idle" | "submitting" | "success" | "error"
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.message.trim()) return;

    setStatus({ type: "submitting", message: "" });

    try {
      const res = await fetch(
        "https://kckvqtgdwjuesbgngywt.functions.supabase.co/contact-submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Request failed");

      setStatus({
        type: "success",
        message: "Thank you for reaching out — I’ll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message:
          "Something went wrong sending your message. You can also email me directly.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="form-field">
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>

      <label className="form-field">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>

      <label className="form-field">
        <span>Message</span>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      <button
        type="submit"
        className="primary-button"
        disabled={status.type === "submitting"}
      >
        {status.type === "submitting" ? "Sending…" : "Send"}
      </button>

      {status.type === "success" && (
        <p className="text-body contact-confirmation">{status.message}</p>
      )}

      {status.type === "error" && (
        <p className="text-body contact-error">{status.message}</p>
      )}
    </form>
  );
}
