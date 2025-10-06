import { useState } from 'react';
import AnimatedText from './AnimatedText'
import { ActionButton, LinkButton } from "./Button";

const Pricing = () => {
  // states
  const [activePlan, setActivePlan] = useState('basic');

  //  data 
  const plans = {
    basic: {
      title: "Basic Plan",
      price: "70",
      description: "Quick Development Design 1 page website development or custom code website without API integration (Static)",
      features: [
        "Router setup in express",
        "MongoDB Atlas setup",
        "Hosting setup",
        "Maximum 2 revitions",
        "Basic react UI",
        "responsive website"
      ]
    },
    standard: {
      title: "Standard Plan",
      price: "300",
      description: "Quick Development Design 1 page website development or custom code website without API integration (Static)",
      features: [
        "All features include from basic plan",
        "Google Auth and Custom email password login singup",
        "Payment gateway intregation",
        "API intergation",
        "SEO Optimized",
        "Maximum 5 revitions"
      ]
    },
    premium: {
      title: "Premium Plan",
      price: "500",
      description: "Quick Development Design 1 page website development or custom code website without API integration (Static)",
      features: [
        "All features include from standard plan",
        "Advanced SEO optimized",
        "Cross social media auth",
        "JWT auth",
        "Unlimited revitions",
        "Cross payment gateway intregation"
      ]
    }
  };

  // plan card for use basic, premium and pro
  const PlanCard = ({ plan, isActive }) => (
    <div className={`bg-light dark:bg-dark p-2 md:p-4 rounded-2xl md:rounded-3xl space-y-4 card ${!isActive ? 'hidden' : ''}`}>
      <div className="bg-linear-120 from-red-400/10 to-primary/50 px-4 py-6 rounded-2xl md:rounded-3xl">
        <h3 className="text-3xl font-medium">{plans[plan].title}</h3>
        <p className="text-sm dark:text-white/70 text-black/70">{plans[plan].description}</p>
        <p className="text-7xl mt-5">${plans[plan].price}<span className="text-3xl text-black/70 dark:text-white/70">/project</span></p>
      </div>
      <ul className="space-y-1 text-xl mx-2">
        {plans[plan].features.map((feature, index) => (
          <li key={index} className="before:absolute before:aspect-square before:h-1 before:bg-black dark:before:bg-white relative pl-5 before:transform before:-translate-y-1/2 before:top-1/2 before:left-0 before:rounded-full">
            {feature}
          </li>
        ))}
      </ul>
      <div className="w-full flex justify-center">
        <LinkButton href="#" primary={true}>Get Started</LinkButton>
      </div>
    </div>
  );

  return (
    <section
      id="pricing"
      className="bg-white dark:bg-[#030303] mt-30"
    >
      <div className="px-7 lg:px-12 mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5">
        {/* title */}
        <div className="text-content">
          <AnimatedText className="md:text-7xl text-4xl text-center lg:text-left md:font-medium">
            Flexible Pricing Options
          </AnimatedText>
          <p className="mt-3 text-sm md:text-base opacity-80">Choose a plan that fits your needs. Flexible pricing options designed for freelancers, startups, and businesses of all sizes.</p>
        </div>

        {/* plan tab */}
        <div className="main-content flex flex-col gap-5 justify-center">
          <div className="flex gap-3 w-max mx-auto justify-center rounded-full bg-light dark:bg-dark md:p-2 p-1 text-sm md:text-base">
            {Object.keys(plans).map(plan => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`md:px-6 px-4 cursor-pointer py-2 md:py-3 rounded-full transition-all ${activePlan === plan ? 'bg-primary' : ''}`}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </button>
            ))}
          </div>

          {/* fetch items from array */}
          {Object.keys(plans).map(plan => (
            <PlanCard key={plan} plan={plan} isActive={activePlan === plan} />
          ))}

          <LinkButton href="#" primary={false}>Custom Plan</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Pricing;