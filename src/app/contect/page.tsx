'use client';  // Add this line at the top

import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log(formData);
  };

  return (
    <div className="border-solid">
      <div className="p-8 md:p-36 bg-gradient-to-r from-blue-400 to-blue-800 text-white" style={{ marginTop: "70px" }}>
        <div className="text-xl md:text-2xl text-white p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl p-4 md:p-10">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="p-4 md:p-7">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-2 w-full text-black"
              />
            </div>

            <div className="p-4 md:p-7">
              <label className="block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="yourname@example.com"
                className="p-2 w-full text-black"
              />
            </div>

            <div className="p-4 md:p-7">
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="p-2 w-full text-black"
                rows={4}
              />
            </div>

            <div className="p-4 md:p-7">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2 w-full md:w-auto">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
