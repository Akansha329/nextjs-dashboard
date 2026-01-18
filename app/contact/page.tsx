"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_zs8p5kb",   
        "template_rekgq3c",  
        formRef.current,
        "rQYekkjU2wDChZ04g"   
      )
      .then(
        () => setStatus("Message sent successfully!"),
        () => setStatus("Failed to send message, try again.")
      );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/nyc.jpg')" }}
    >
      <div className="min-h-screen bg-black/70 flex items-center justify-center px-6 pt-32">
        <form
          ref={formRef}
          onSubmit={handleSend}
          className="bg-white text-black max-w-xl w-full p-10 rounded-xl shadow-xl"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

          <input
            name="user_name"
            placeholder="Your Name"
            className="w-full border p-3 rounded mb-4"
            required
          />

          <input
            name="user_email"
            placeholder="Your Email"
            className="w-full border p-3 rounded mb-4"
            type="email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-3 rounded mb-6"
            rows={5}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-center text-green-600">{status}</p>}
        </form>
      </div>
    </div>
  );
}