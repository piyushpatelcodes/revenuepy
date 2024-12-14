"use client";
import { Star, CheckCircle, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EnhancedCard() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard");

    console.log("Navigate to SaaS Dashboard");
  };

  return (
    <section className="bg-black text-white min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="z-0 opacity-50 absolute inset-0 flex justify-center items-center">
        <div
          className="absolute top-20 left-10 w-48 h-48 bg-zinc-700 rounded-full blur-3xl opacity-50 mix-blend-multiply"
          style={{ animation: "blob-animate 8s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute top-10 right-20 w-56 h-56 bg-zinc-600 rounded-full blur-3xl opacity-40 mix-blend-multiply"
          style={{ animation: "blob-animate 10s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-20 left-60 w-64 h-64 bg-zinc-500 rounded-full blur-3xl opacity-30 mix-blend-multiply"
          style={{ animation: "blob-animate 12s ease-in-out infinite" }}
        ></div>
      </div>

      <div className="relative z-10 p-8 rounded-xl bg-zinc-800/40 backdrop-blur-md border border-zinc-700/50 shadow-lg w-full sm:w-[450px] text-center">
        <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay rounded-xl"></div>

        <h1 className="text-4xl font-extrabold mb-4 text-white leading-snug tracking-wide">
          Ready to Manage Your Revenue?
        </h1>
        <p className="text-sm text-zinc-400 mb-6">
          Leverage analytics, insights, and tools to boost your business.
        </p>

        <div className="grid grid-cols-3 gap-3 text-center mb-6">
          <div className="flex flex-col items-center">
            <TrendingUp className="text-indigo-400 w-8 h-8 mb-2" />
            <span className="text-xs text-zinc-300">Growth Analytics</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="text-yellow-400 w-8 h-8 mb-2" />
            <span className="text-xs text-zinc-300">Top Features</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="text-green-400 w-8 h-8 mb-2" />
            <span className="text-xs text-zinc-300">Secure & Trusted</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleClick}
            className="px-6 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-blue-600 rounded-md transform hover:scale-105 transition-all duration-200"
          >
            Go to SaaS Dashboard
          </button>
          <button className="px-6 py-2 text-sm font-medium bg-transparent border border-zinc-400 text-zinc-300 rounded-md hover:bg-zinc-700 transition duration-200">
            Learn More
          </button>
        </div>

        <div className="border-t border-zinc-700 mt-6 mb-4"></div>

        <div className="text-xs text-zinc-400">
          Trusted by <span className="text-white font-semibold">2,000+</span>
          businesses worldwide.
        </div>
      </div>

      <div className="absolute top-10 left-10 animate-bounce">
        <TrendingUp className="w-12 h-12 text-indigo-600/30" />
      </div>
      <div className="absolute bottom-10 right-10 animate-pulse">
        <Star className="w-10 h-10 text-yellow-500/40" />
      </div>

      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
    </section>
  );
}
