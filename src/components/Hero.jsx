import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Users,
  TrendingUp
} from 'lucide-react';

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-badge">
          <span className="badge-dot"></span>
          Smarter work starts here
        </div>

        <h1>
          Manage Projects.
          <br />
          <span>Achieve More.</span>
        </h1>

        <p className="hero-description">
          Bring your team, tasks, and projects together
          in one simple workspace. Stay organized,
          meet deadlines, and get more done with Taskora.
        </p>

        <div className="hero-buttons">
          <a href="#pricing" className="primary-btn">
            Get Started Free
            <ArrowRight size={18} />
          </a>

          <a href="#about" className="secondary-btn">
            Explore Features
          </a>
        </div>

        <div className="hero-trust">
          <CheckCircle2 size={17} />
          No credit card required
        </div>

      </div>

      <div className="hero-visual">

        <div className="dashboard-card">

          <div className="dashboard-header">
            <div>
              <span className="dashboard-label">
                WORKSPACE
              </span>
              <h3>My Dashboard</h3>
            </div>

            <div className="avatar">K</div>
          </div>

          <div className="dashboard-stats">

            <div className="stat-box">
              <div className="stat-icon purple">
                <CheckCircle2 size={19} />
              </div>
              <span>Completed</span>
              <h2>24</h2>
              <small>Tasks completed</small>
            </div>

            <div className="stat-box">
              <div className="stat-icon orange">
                <Clock3 size={19} />
              </div>
              <span>In Progress</span>
              <h2>08</h2>
              <small>Tasks ongoing</small>
            </div>

          </div>

          <div className="project-heading">
            <h4>Recent Projects</h4>
            <span>View all</span>
          </div>

          <div className="project-item">
            <div className="project-icon project-purple">
              <Users size={19} />
            </div>
            <div className="project-info">
              <strong>Website Redesign</strong>
              <small>12 tasks · 4 members</small>
            </div>
            <span className="project-status">
              75%
            </span>
          </div>

          <div className="progress-bar">
            <div style={{ width: '75%' }}></div>
          </div>

          <div className="project-item">
            <div className="project-icon project-orange">
              <TrendingUp size={19} />
            </div>
            <div className="project-info">
              <strong>Marketing Campaign</strong>
              <small>8 tasks · 3 members</small>
            </div>
            <span className="project-status">
              45%
            </span>
          </div>

          <div className="progress-bar">
            <div style={{ width: '45%' }}></div>
          </div>

        </div>

        <div className="floating-card">
          <CheckCircle2 size={20} color="#16a34a" />
          <div>
            <strong>Task Completed!</strong>
            <small>Great work today.</small>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;