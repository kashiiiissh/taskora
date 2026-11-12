import {
  Check,
  ArrowRight,
  Zap,
  Crown
} from 'lucide-react';

const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    description: 'Everything you need to get started.',
    price: 'Free',
    period: 'Forever',
    icon: Zap,
    popular: false,
    features: [
      'Basic task management',
      'Up to 2 active projects',
      'Basic dashboard',
      'Task organization',
      'Email support'
    ],
    buttonText: 'Get Started Free',
    planClass: 'starter-plan'
  },
  {
    id: 2,
    name: 'Professional',
    description: 'More power for growing teams.',
    price: '₹499',
    period: 'per month',
    icon: Crown,
    popular: true,
    features: [
      'Unlimited projects',
      'Team collaboration',
      'Advanced analytics',
      'Priority support',
      'Deadline tracking'
    ],
    buttonText: 'Choose Professional',
    planClass: 'professional-plan'
  }
];

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">

      <div className="pricing-container">

        <div className="section-heading">

          <span className="section-tag">
            SIMPLE & TRANSPARENT PRICING
          </span>

          <h2>
            Choose the Plan That
            <span> Works for You</span>
          </h2>

          <p>
            Start for free and upgrade when your team
            needs more powerful tools.
          </p>

        </div>

        <div className="pricing-grid">

          {pricingPlans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                className={`pricing-card ${plan.planClass}`}
                key={plan.id}
              >

                {plan.popular && (
                  <div className="popular-badge">
                    MOST POPULAR
                  </div>
                )}

                <div className="pricing-icon">
                  <Icon size={23} />
                </div>

                <h3>{plan.name}</h3>

                <p className="pricing-description">
                  {plan.description}
                </p>

                <div className="price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>

                <div className="pricing-divider"></div>

                <h4>What's included:</h4>

                <ul className="pricing-features">

                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <Check size={17} />
                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                <a
                  href="#contact"
                  className={`pricing-button ${plan.popular ? 'pricing-primary' : 'pricing-secondary'}`}
                >
                  {plan.buttonText}
                  <ArrowRight size={17} />
                </a>

              </div>
            );
          })}

        </div>

        <p className="pricing-note">
          No hidden fees. Start with the free plan and upgrade anytime.
        </p>

      </div>

    </section>
  );
}

export default Pricing;