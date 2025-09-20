 import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.firstName.trim()) return "First name is required";
    if (!form.lastName.trim()) return "Last name is required";
    if (!form.email.trim()) return "Email is required";
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(form.email)) return "Enter a valid email";
    if (!form.phone.trim()) return "Phone number is required";
    if (!form.message.trim()) return "Message cannot be empty";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ loading: false, success: null, error: err });
      return;
    }

    setStatus({ loading: true, success: null, error: null });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus({ loading: false, success: "Message sent successfully!", error: null });
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({ loading: false, success: null, error: "Failed to send message. Try again later." });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Left Form Section */}
        <div className="p-8">
          <h3 className="text-blue-600 font-medium mb-2">Get in Touch</h3>
          <h1 className="text-2xl font-bold mb-2">Let’s Chat, Contact with Us</h1>
          <p className="text-gray-600 mb-6 text-sm">
            Have any questions or feedback? We’re here to help. Send us a message, we’ll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="yourname@company.com"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 444-0000"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message"
              rows="4"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-60"
            >
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.success && <p className="text-green-600 text-sm">{status.success}</p>}
            {status.error && <p className="text-red-600 text-sm">{status.error}</p>}
          </form>
        </div>

        {/* Right Info Section */}
        <div className="bg-gray-100 flex flex-col items-center justify-center p-8 space-y-6">
          <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/300x300.png?text=Profile"
              alt="Contact Person"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full space-y-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
              <FaEnvelope className="text-blue-600 text-lg" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-sm text-gray-600">techsupport@yourmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
              <FaPhoneAlt className="text-blue-600 text-lg" />
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p className="text-sm text-gray-600">(+005) 432 986 450</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
              <FaMapMarkerAlt className="text-blue-600 text-lg" />
              <div>
                <p className="font-medium text-gray-800">Address</p>
                <p className="text-sm text-gray-600">230 Norman Street, New York, HBR 1A1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;