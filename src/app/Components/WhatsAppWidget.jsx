"use client";
import { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";

export default function SocialWidget() {
  const [openChat, setOpenChat] = useState(null); // null | 'whatsapp' | 'phone' | etc.

  const phoneNumber = "918660106697"; // Your WhatsApp number with country code
  const instaUrl = "https://www.instagram.com/yourbusiness"; // your Instagram URL
  const fbUrl = "https://www.facebook.com/yourbusiness"; // your Facebook URL

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4 flex flex-col items-end">
      {/* WhatsApp Popup */}
      {openChat === "whatsapp" && (
        <div className="w-72 rounded-xl shadow-lg bg-white border border-gray-200 mb-2 animate-fadeIn">
          <div className="bg-green-600 px-4 py-2 text-white flex justify-between items-center">
            <div>
              <p className="font-bold text-sm">Virtutix</p>
              <p className="text-xs text-white/80">Typically replies in a few minutes</p>
            </div>
            <button
              onClick={() => setOpenChat(null)}
              className="text-white hover:text-gray-300 text-xl"
            >
              ×
            </button>
          </div>
          <div className="bg-gray-100 p-4 text-sm">
            <div className="bg-white p-3 rounded shadow-sm mb-2">
              <p>Hi there 👋</p>
              <p>How can we help you?</p>
              <span className="text-xs text-gray-400 block text-right mt-1">Now</span>
            </div>
            <a
              href={`https://wa.me/${phoneNumber}?text=Hello%2C%20I%20need%20more%20info%20about%20your%20services`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white text-center py-2 rounded mt-2 hover:bg-green-600 transition"
            >
              <FaWhatsapp className="inline mr-2" />
              Start Chat
            </a>
          </div>
        </div>
      )}

      {/* Phone Redirect */}
      {openChat === "phone" && (
        <div className="w-60 rounded-lg shadow-lg bg-white border border-gray-200 mb-2 p-4 text-sm">
          <p className="text-gray-800">📞 Call us now:</p>
          <a
            href={`tel:+91${phoneNumber}`}
            className="block mt-2 bg-indigo-600 text-white text-center py-2 rounded hover:bg-indigo-700"
          >
            Call +91 {phoneNumber.slice(2)}
          </a>
          <button
            onClick={() => setOpenChat(null)}
            className="text-xs mt-2 text-gray-500 hover:text-red-500"
          >
            Close
          </button>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col space-y-2">
        {/* WhatsApp */}
        <button
          onClick={() => setOpenChat(openChat === "whatsapp" ? null : "whatsapp")}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-xl" />
        </button>

        {/* Instagram */}
        <a
          href={instaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full shadow-md hover:opacity-90 transition"
          aria-label="Instagram"
        >
          <FaInstagram className="text-xl" />
        </a>

        {/* Facebook */}
        <a
          href={fbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-xl" />
        </a>

        {/* Phone */}
        <button
          onClick={() => setOpenChat(openChat === "phone" ? null : "phone")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-md transition"
          aria-label="Call us"
        >
          <FaPhone className="text-xl" />
        </button>
      </div>
    </div>
  );
}
