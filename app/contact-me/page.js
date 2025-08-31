"use client";
import React, { useState } from "react";
import style from "@/app/common.module.css";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add API call here
    setSubmitted(true);
  };

  return (
    <div className={style.card} style={{ maxWidth: 500, margin: "40px auto", padding: 32 }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Contact Me</h2>
      {submitted ? (
        <div style={{ textAlign: "center", color: "green" }}>
          Thank you for reaching out!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc",color: "#222" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" ,color: "#222"}}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" ,color: "#222"}}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 6,
              background: "#222",
              color: "#fff",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer"
            }}
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactMe;