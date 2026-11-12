function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">T</span>
              Taskora
            </a>

            <p>
              Plan smarter, work better, and achieve more.
              Taskora helps you manage projects and stay productive.
            </p>

            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">IG</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">IN</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GH</a>
            </div>
          </div>

          {/* Product */}
          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">How It Works</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#home">Home</a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <p>Have questions about Taskora?</p>
            <a href="#contact" className="footer-contact-link">
              Contact Us →
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Taskora. All rights reserved.</p>

          <a href="#home" className="back-to-top">
            Back to Top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;