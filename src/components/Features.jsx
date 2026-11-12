import {
  ListChecks,
  Users,
  ChartNoAxesCombined,
  CalendarClock,
  ArrowUpRight
} from 'lucide-react';

const featuresData = [
  {
    id: 1,
    icon: ListChecks,
    title: 'Smart Task Management',
    description:
      'Create, organize, and prioritize your tasks in one place. Keep your workflow simple and stay focused on what matters.',
    color: 'feature-purple'
  },
  {
    id: 2,
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Bring your team together, assign responsibilities, share updates, and collaborate seamlessly on every project.',
    color: 'feature-orange'
  },
  {
    id: 3,
    icon: ChartNoAxesCombined,
    title: 'Real-time Analytics',
    description:
      'Get a clear view of project performance, track progress, and understand your team productivity.',
    color: 'feature-green'
  },
  {
    id: 4,
    icon: CalendarClock,
    title: 'Deadline Tracking',
    description:
      'Keep track of upcoming deadlines, manage schedules, and make sure important tasks are completed on time.',
    color: 'feature-blue'
  }
];

function Features() {
  return (
    <section className="features-section" id="features">

      <div className="features-container">

        <div className="section-heading">
          <span className="section-tag">
            WHAT WE OFFER
          </span>

          <h2>
            Everything You Need to
            <span> Work Smarter</span>
          </h2>

          <p>
            Powerful tools designed to simplify your workflow,
            improve teamwork, and help you achieve more every day.
          </p>
        </div>

        <div className="features-grid">

          {featuresData.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="feature-card" key={feature.id}>

                <div className={`feature-icon ${feature.color}`}>
                  <Icon size={25} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <a href="#about" className="feature-link">
                  Learn more
                  <ArrowUpRight size={16} />
                </a>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Features;