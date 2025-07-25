"use client";
import { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";

const services = [
  { title: "Website Design" },
  { title: "Data Analytics" },
  { title: "BI Dashboards" },
  { title: "Cloud & Big Data" },
  { title: "IoT & Automation" },
  { title: "Data Security" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact"className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>

        {/* Name Input */}
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="pl-10 w-full border bg-sky-950 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="pl-10 w-full border bg-sky-950 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Phone Input */}
        <div className="relative">
          <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            required
            className="pl-10 w-full border bg-sky-950 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Service Dropdown */}
        <div className="relative">
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full border bg-sky-950 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select a Service</option>
            {services.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="relative">
          <FiMessageCircle className="absolute left-3 top-4 text-gray-400" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="pl-10 pt-4 w-full border bg-sky-950 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Send Message
        </button>

        {/* Status */}
        {status && (
          <p
            className={`text-center text-sm font-medium ${
              status.includes("successfully") ? "text-green-600" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
