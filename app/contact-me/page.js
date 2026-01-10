"use client";
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        'service_37ugmkr', // Replace with your EmailJS service ID
        'template_ylumre8', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'sithuhtin2022@gmail.com', // Your personal email
        },
        'F3RuUwL4wRRGypadF' // Replace with your EmailJS public key
      );
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto px-4 py-12">
        {/* Address Card Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-black/60 backdrop-blur-lg border-4 border-white/20 rounded-2xl p-8 min-w-[300px] shadow-xl text-white">
            <h3 className="mb-3 font-bold text-lg text-center">Contact Information</h3>
            <div className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+66640869218" className="text-white hover:underline">
                +66 640 869 218
              </a>
            </div>
            <div className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:sithuhtin2022@gmail.com" className="text-white hover:underline">
                sithuhtin2022@gmail.com
              </a>
            </div>
            <div className="mb-2">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5] hover:underline"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
            <div className="mb-2">
              <strong>Telegram:</strong>{" "}
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0088cc] hover:underline"
              >
                @yourusername
              </a>
            </div>
            <div>
              <strong>Facebook:</strong>{" "}
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877f3] hover:underline"
              >
                facebook.com/yourprofile
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-md bg-black/60 backdrop-blur-lg border-4 border-white/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-center mb-6 text-white text-2xl font-semibold">Contact Me</h2>
            {submitted ? (
              <div className="text-center text-green-500 font-medium">
                Thank you for reaching out!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mb-4">
                  <label className="block mb-1 text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1 text-white">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-yellow-500 text-black font-bold text-lg shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;