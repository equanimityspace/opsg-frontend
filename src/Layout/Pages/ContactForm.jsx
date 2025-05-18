import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          message: formData.message,
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ fullName: "", email: "", phone: "", message: "" });
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

      <div className="container mt-5" style={{ maxWidth: "600px" }}>
        <h1 className="text-center mb-4">Contact Information</h1>
        <Card style={{ padding: "50px", margin: "2rem 0" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
