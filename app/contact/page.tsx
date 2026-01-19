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
      .sendForm("service_zs8p5kb", "template_rekgq3c", formRef.current, "rQYekkjU2wDChZ04g")
      .then(() => setStatus("Message sent successfully!"))
      .catch(() => setStatus("Failed to send message."));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/nyc.jpg')" }}
    >
      <div className="bg-black/70 min-h-screen flex items-center justify-center px-4 pt-32">
        <form
          ref={formRef}
          onSubmit={handleSend}
          className="bg-white p-8 rounded-xl max-w-md w-full"
        >
          <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>

          <input name="user_name" placeholder="Name" className="w-full border p-3 mb-4" required />
          <input name="user_email" placeholder="Email" type="email" className="w-full border p-3 mb-4" required />
          <textarea name="message" placeholder="Message" className="w-full border p-3 mb-4" rows={4} />

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Send
          </button>

          {status && <p className="text-center mt-4 text-green-600">{status}</p>}
        </form>
      </div>
    </div>
  );
}