export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0/mo",
      features: ["Basic Analytics", "Expense Tracking"],
    },
    {
      name: "Pro",
      price: "$19/mo",
      features: ["Advanced Analytics", "Revenue Forecasting", "Integrations"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom Features", "Dedicated Support", "Team Management"],
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-zinc-800 opacity-60 mix-blend-overlay"></div>

      <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative p-8 bg-zinc-800/50 rounded-lg shadow-xl group hover:scale-105 transition-all duration-500 transform"
          >
            <div className="z-10 relative">
              <h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-zinc-400 transition-colors duration-300">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold mb-4 text-center text-gradient group-hover:text-zinc-400 transition-colors duration-300">
                {plan.price}
              </p>
            </div>

            <ul className="text-zinc-400 mb-6 space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="relative">
                  <span className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-zinc-600 to-gray-800"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className="px-6 py-2 rounded-md bg-gradient-to-r from-zinc-700 to-black text-white font-semibold w-full transform hover:scale-105 transition-transform duration-300">
              Choose Plan
            </button>

            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-black/50 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
