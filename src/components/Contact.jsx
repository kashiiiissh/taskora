import { useState } from 'react';

import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Headphones
} from 'lucide-react';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));

    setSubmitted(false);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        <div className="contact-layout">

          {/* LEFT CONTACT INFORMATION */}

          <div className="contact-info">

            <span className="contact-tag">
              GET IN TOUCH
            </span>

            <h2>
              Let's Build Something
              <span> Great Together.</span>
            </h2>

            <p className="contact-description">
              Have a question or want to explore Taskora?
              Send us a message and tell us how we can help
              you manage your projects better.
            </p>

            <div className="contact-details">

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <strong>Email Support</strong>
                  <p>Send us your enquiry using the form.</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MessageSquare size={22} />
                </div>

                <div>
                  <strong>Quick Enquiries</strong>
                  <p>Share your questions and requirements.</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Headphones size={22} />
                </div>

                <div>
                  <strong>Product Assistance</strong>
                  <p>Tell us what you need help with.</p>
                </div>
              </div>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div className="contact-form-card">

            <div className="form-heading">
              <h3>Send Us a Message</h3>
              <p>Fill in the details below to submit your enquiry.</p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={2}
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  minLength={10}
                  required
                />

              </div>

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Submit Request
                <Send size={17} />
              </button>

              {submitted && (
                <div className="success-message" role="status">

                  <CheckCircle2 size={20} />

                  <span>
                    Your enquiry has been submitted successfully!
                  </span>

                </div>
              )}

            </form>

            <p className="form-note">
              All fields are required.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;