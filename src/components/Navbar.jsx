import { LayoutDashboard } from 'lucide-react';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">
          <LayoutDashboard size={22} />
        </span>
        <span>taskora</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#pricing">Pricing</a>
      </div>

      <a href="#contact" className="nav-button">
        Get Started <span>→</span>
      </a>
    </nav>
  );
}

export default Navbar;