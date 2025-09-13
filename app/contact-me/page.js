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
    setSubmitted(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "64px",
        maxWidth: 1100,
        margin: "40px auto",
        padding: 32,
        alignItems: "stretch"
      }}
    >
      {/* Address Card Section */}
      
      <div style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div
          style={{
            background: "rgba(30, 30, 30, 0.4)", // semi-transparent for glass effect
            borderRadius: 16,
            padding: 28,
            minWidth: 320,
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            color: "#fff",
            border: "3px solid rgba(255,255,255,0.4)", // significant border
            backdropFilter: "blur(12px)", // glass effect
            WebkitBackdropFilter: "blur(12px)", // Safari support
            transition: "box-shadow 0.3s"
          }}
        >
          <h3 style={{ marginBottom: 12, fontWeight: "bold" }}>Contact Information</h3>
          <div style={{ marginBottom: 8 }}>
            <strong>Phone:</strong> <a href="tel:+1234567890" style={{ color: "#fff" }}>+123 456 7890</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <strong>Email:</strong> <a href="mailto:your@email.com" style={{ color: "#fff" }}>your@email.com</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5" }}>linkedin.com/in/yourprofile</a>
          </div>
          <div style={{ marginBottom: 8 }}>
            <strong>Telegram:</strong> <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" style={{ color: "#0088cc" }}>@yourusername</a>
          </div>
          <div>
            <strong>Facebook:</strong> <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: "#1877f3" }}>facebook.com/yourprofile</a>
          </div>
        </div>
      </div>
      {/* Contact Form Section */}
      <div style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <h2 style={{ textAlign: "center", marginBottom: 24, color: "#222" }}>Contact Me</h2>
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
                  style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", color: "#222" }}
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
                  style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", color: "#222" }}
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
                  style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc", color: "#222" }}
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
      </div>
    </div>
  );
};

export default ContactMe;