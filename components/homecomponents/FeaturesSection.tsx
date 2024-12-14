export default function FeaturesSection() {
  const features = [
    {
      title: "Real-Time Analytics",
      desc: "Monitor revenue and expenses in real-time with advanced charts and insights.",
    },
    {
      title: "Seamless Integrations",
      desc: "Integrate with your favorite payment platforms like Stripe, PayPal, and more.",
    },
    {
      title: "Expense Tracking",
      desc: "Categorize, manage, and track expenses effortlessly.",
    },
    {
      title: "Revenue Predictions",
      desc: "AI-driven predictions to plan your future growth.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 relative">
      {/* Background Noise Texture */}
      <div className="absolute inset-0  opacity-10 mix-blend-overlay"></div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-zinc-800 rounded-3xl shadow-xl group hover:scale-105 hover:shadow-2xl transition-all duration-500 transform"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

            {/* Noisy Texture Overlay */}
            <div className="absolute inset-0  opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-300"></div>

            {/* Feature Content */}
            <div className="relative z-10 p-8">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-zinc-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-zinc-400">{feature.desc}</p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-600/80 to-black opacity-20 group-hover:opacity-40 rounded-3xl transition-all "></div>
          </div>
        ))}
      </div>

      {/* Company Icons Marquee Section */}
      <div className="mt-20">
        <div className="overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            <div className="flex-shrink-0">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-800 to-amber-600 filter grayscale hover:grayscale-0 transition-all duration-500 outline-4 outline-offset-2 outline-gray-400 hover:outline-transparent">
                BOULEVARD LEGACY LLC.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
