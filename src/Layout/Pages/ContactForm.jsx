import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ReactiveButton from "reactive-button";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../../utils/footer";
import { motion } from "framer-motion";

export default function ContactFormPage() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setRecaptchaError("Please verify you're not a robot");
      return;
    }

    setRecaptchaError("");
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          email_address: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
      recaptchaRef.current.reset();
    } catch (err) {
      console.error("Email sending error:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />

      <main className="flex-grow-1 bg-light">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInAnimationVariants}
          className="py-5"
        >
          <div className="container py-md-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mb-5">
                <h2 className="display-5 fw-bold text-dark mb-3">
                  We'd Love To Hear From You
                </h2>
                <p className="lead text-muted">
                  Have questions or need assistance? Send us a message and we'll
                  get back to you shortly.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                {isSubmitted ? (
                  <Card className="border-0 shadow-sm rounded-3">
                    <Card.Body className="text-center p-5">
                      {/* looks confusing but its just a checkmark in a circle */}
                      <div className="mb-4">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#558e89"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="mb-3">Thank You!</h3>
                      <p className="text-muted mb-4">
                        Your message has been sent successfully. We'll get back
                        to you soon.
                      </p>
                    </Card.Body>
                  </Card>
                ) : (
                  <Card className="border-0 shadow-sm rounded-3">
                    <Card.Body className="p-4 p-md-5">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label
                            htmlFor="fullName"
                            className="form-label fw-semibold text-uppercase small text-muted"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="form-control py-2"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="form-label fw-semibold text-uppercase small text-muted"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control py-2"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="phone"
                            className="form-label fw-semibold text-uppercase small text-muted"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-control py-2"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="message"
                            className="form-label fw-semibold text-uppercase small text-muted"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            className="form-control py-2"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            className="d-flex justify-content-center"
                          />
                          {recaptchaError && (
                            <div className="text-danger small mt-2 text-center">
                              {recaptchaError}
                            </div>
                          )}
                        </div>

                        <div className="text-center">
                          <ReactiveButton
                            buttonState={loading ? "loading" : "idle"}
                            idleText="Send Message"
                            loadingText="Sending..."
                            successText="Sent!"
                            errorText="Failed"
                            type="submit"
                            className="w-100 py-2"
                            style={{
                              backgroundColor: "#558e89",
                              borderColor: "#558e89",
                              fontWeight: 500,
                              letterSpacing: "0.5px",
                            }}
                            rounded
                            shadow
                          />
                        </div>
                      </form>
                    </Card.Body>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
