import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../Navbar";


export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          email_address: formData.email,
          phone_number: formData.phone,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent succesfully!");
          setFormData({ fullName: "", email: "", phone: "" });
        },
        (err) => {
          console.error(err);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
    <NavBar />
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Contact Information</h1>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          background: #fff;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        h1 {
          margin-bottom: 20px;
          text-align: center;
          font-size: 1.5rem;
          color: #333;
        }
        label {
          margin-bottom: 15px;
          font-size: 1rem;
          color: #555;
          display: flex;
          flex-direction: column;
        }
        input {
          margin-top: 5px;
          padding: 8px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          padding: 10px;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          background: #0070f3;
          color: #fff;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background: #005bb5;
        }
      `}</style>
    </div>
    </>);
}
