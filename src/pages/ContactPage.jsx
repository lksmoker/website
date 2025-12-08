import React, { useState } from "react";

const FUNCTION_URL =
  "https://kckvqtgdwjuesbgngywt.supabase.co/functions/v1/contact-submit";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // UI status for humans
  const [status, setStatus] = useState({
    type: "idle", // "idle" | "submitting" | "success" | "error"
    message: "",
  });

  // Extra debug info so you can see what happened without DevTools
  const [debug, setDebug] = useState({
    lastStatusCode: null,
    lastOk: null,
    lastError: "",
    lastBody: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.message.trim()) return;

    setStatus({ type: "submitting", message: "" });
    setDebug((prev) => ({
      ...prev,
      lastError: "",
      lastBody: "",
    }));

    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });

      const bodyText = await res.text().catch(() => "");

      setDebug({
        lastStatusCode: res.status,
        lastOk: res.ok,
        lastError: res.ok ? "" : "Non-OK HTTP response",
        lastBody: bodyText,
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      setStatus({
        type: "success",
        message: "Thank you for reaching out — I’ll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "Something went wrong sending your message. You can also email me directly.",
      });

      setDebug((prev) => ({
        ...prev,
        lastError: err?.message || String(err),
      }));
    }
  }

  return (
    <div className="contact-form-wrapper">
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
          {status.type === "submitting" ? "Sending..." : "Send"}
        </button>

        {/* Human-facing status */}
        {status.type === "success" && (
          <p className="text-body contact-confirmation">{status.message}</p>
        )}

        {status.type === "error" && (
          <p className="text-body contact-error">{status.message}</p>
        )}
      </form>

      {/* Debug panel so you can see what’s going on from your phone */}
      <div
        className="contact-debug"
        style={{
          marginTop: "1rem",
          padding: "0.75rem",
          fontSize: "0.8rem",
          borderRadius: "0.5rem",
          border: "1px dashed rgba(0,0,0,0.2)",
          opacity: 0.9,
        }}
      >
        <strong>Debug info</strong>
        <div>Status type: {status.type}</div>
        {status.message && <div>Message: {status.message}</div>}
        <div>HTTP status: {debug.lastStatusCode ?? "—"}</div>
        <div>OK: {debug.lastOk === null ? "—" : String(debug.lastOk)}</div>
        {debug.lastError && <div>Error: {debug.lastError}</div>}
        {debug.lastBody && (
          <div style={{ marginTop: "0.5rem" }}>
            <div>Response body:</div>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: 0,
              }}
            >
              {debug.lastBody}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}