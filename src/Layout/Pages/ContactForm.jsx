import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ReactiveButton from "reactive-button";

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

  const [loading, setLoading] = useState(false);

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
     <div className="background">
      <div className="backgroundAccent">
      <NavBar />

      <div className="container mt-5" style={{paddingTop: '90px'}} >
        {/* <h1 className="text-center mb-4"  style={{fontSize: "12px"}}>CONTACT US</h1> */}
        <Card style={{ padding: "30px", margin: "2rem 0", width: "600px", maxWidth: "700px", minWidth: "425px" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label" style={{fontSize: "12px"}}>
                FIRST AND LAST NAME
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-control"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={{fontSize: "12px"}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label" style={{fontSize: "12px"}}>
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                style={{fontSize: "12px"}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label" style={{fontSize: "12px"}}>
                PHONE NUMBER
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{fontSize: "12px"}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label" style={{fontSize: "12px"}}>
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                required
                style={{fontSize: "12px"}}
              />
            </div>
            <div className="text-center">
                <ReactiveButton
                   rounded
                   buttonState={loading ? 'loading' : 'idle'}
                   idleText={'SUBMIT'}
                   loadingText={'Loading'}
                   variant="secondary"
                   className="button3"
                   type="submit"
                   style={{
                      justifyContent: "left",
                      width: "80px",
                      fontSize: "12px",
                      backgroundColor: "#558e89",
                      marginTop: "5px",
                   }}>
                </ReactiveButton>
            </div>
          </form>
        </Card>
       </div>
      </div>
    </div>
    </>
  );
}
