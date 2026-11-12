import {
  LayoutDashboard,
  FolderKanban,
  ChartNoAxesCombined,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const workflowSteps = [
  {
    number: '01',
    icon: LayoutDashboard,
    title: 'Create Your Workspace',
    description:
      'Start by creating your workspace. Bring your team together and get everything organized in one place.',
    color: 'workflow-purple'
  },
  {
    number: '02',
    icon: FolderKanban,
    title: 'Organize Your Projects',
    description:
      'Create projects, assign tasks to team members, set priorities, and keep everyone on the same page.',
    color: 'workflow-orange'
  },
  {
    number: '03',
    icon: ChartNoAxesCombined,
    title: 'Track Your Progress',
    description:
      'Monitor completed tasks, check project progress, and stay on top of your deadlines.',
    color: 'workflow-green'
  }
];

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <div className="about-layout">

          {/* LEFT CONTENT */}

          <div className="about-content">

            <span className="about-tag">
              HOW TASKORA WORKS
            </span>

            <h2>
              Less Managing.
              <br />
              <span>More Achieving.</span>
            </h2>

            <p className="about-description">
              Taskora makes project management simple.
              From planning your work to tracking your
              progress, everything stays organized in
              one place.
            </p>

            <div className="about-points">

              <div className="about-point">
                <CheckCircle2 size={19} />
                <span>Keep all your projects organized</span>
              </div>

              <div className="about-point">
                <CheckCircle2 size={19} />
                <span>Collaborate with your entire team</span>
              </div>

              <div className="about-point">
                <CheckCircle2 size={19} />
                <span>Stay focused on your goals</span>
              </div>

            </div>

            <a href="#pricing" className="about-button">
              Explore Plans
              <ArrowUpRight size={17} />
            </a>

          </div>

          {/* RIGHT WORKFLOW CARD */}

          <div className="workflow-card">

            <div className="workflow-header">
              <div>
                <span>YOUR WORKFLOW</span>
                <h3>Get Started in 3 Steps</h3>
              </div>

              <div className="workflow-status">
                <span></span>
                Simple & Easy
              </div>
            </div>

            <div className="workflow-steps">

              {workflowSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div className="workflow-step" key={step.number}>

                    <div className={`workflow-icon ${step.color}`}>
                      <Icon size={23} />
                    </div>

                    <div className="workflow-info">

                      <span className="workflow-number">
                        STEP {step.number}
                      </span>

                      <h4>{step.title}</h4>

                      <p>{step.description}</p>

                    </div>

                  </div>
                );
              })}

            </div>

            <div className="workflow-footer">
              <CheckCircle2 size={18} />
              <span>Everything you need, in one workspace.</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;