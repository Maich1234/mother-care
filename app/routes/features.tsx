import { motion } from "framer-motion";

import { BsHeartPulse,BsActivity, BsMoonStars } from "react-icons/bs";
import { LuShieldCheck, LuCalendarCheck2,LuBaby,LuBellRing, LuBrain } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa"

export default function FeaturesPage() {
  const features = [
    {
      icon: BsHeartPulse,
      title: "Pregnancy Tracking",
      description:
        "Track pregnancy week by week with baby growth updates, body changes, and maternal health guidance.",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: LuBellRing,
      title: "Smart Reminders",
      description:
        "Get timely reminders for clinic visits, medications, hydration, supplements, and vaccinations.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: LuBaby,
      title: "Baby Care Monitoring",
      description:
        "Monitor feeding, sleep, diaper changes, growth milestones, and baby development after birth.",
      image:
        "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: LuCalendarCheck2,
      title: "Clinic Scheduling",
      description:
        "Stay organized with ANC schedules, vaccination timelines, and upcoming appointments.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: LuBrain,
      title: "Personalized Guidance",
      description:
        "Receive tailored motherhood tips, nutritional advice, and wellness recommendations.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: LuShieldCheck,
      title: "Safe Motherhood",
      description:
        "Access reliable information and alerts to help mothers make safer healthcare decisions.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-5 py-2 text-sm text-pink-100 backdrop-blur-md">
              Designed Around Motherhood
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Features Built for
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
                {" "}
                Mothers & Babies
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-pink-100/70 md:text-xl">
              Every feature in Mother-Care is designed to make the
              motherhood journey calmer, safer, and more connected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid items-center gap-14 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* IMAGE */}
                <div
                  className={`relative ${
                    index % 2 !== 0 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-2xl" />

                  <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-[500px] w-full object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`${
                    index % 2 !== 0 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                    <Icon className="h-10 w-10 text-pink-200" />
                  </div>

                  <h2 className="mt-8 text-4xl font-bold">
                    {feature.title}
                  </h2>

                  <p className="mt-6 text-lg leading-relaxed text-pink-100/70">
                    {feature.description}
                  </p>

                  <button className="mt-8 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-7 py-4 font-semibold shadow-lg shadow-pink-500/20 transition hover:scale-105">
                    Learn More
                    <FaArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* EXTRA FEATURES */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              More Supportive Features
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-pink-100/70">
              Mother-Care goes beyond tracking to provide emotional,
              practical, and intelligent support.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BsActivity,
                title: "Health Insights",
                description:
                  "Understand trends in maternal and baby wellbeing.",
              },

              {
                icon: BsMoonStars,
                title: "Sleep Monitoring",
                description:
                  "Track baby sleep schedules and maternal rest.",
              },

              {
                icon: LuBrain,
                title: "AI Guidance",
                description:
                  "Receive smart recommendations tailored to motherhood.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="rounded-[30px] border border-white/10 bg-white/5 p-8"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                    <Icon className="h-8 w-8 text-pink-200" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-pink-100/70">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section className="relative z-10 px-6 pb-32">
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-2xl">
          <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-5 py-2 text-sm text-pink-100 backdrop-blur-md">
            Coming Soon
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-5xl">
            Join the Mother-Care Waitlist
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pink-100/70">
            Be among the first mothers to experience a warm,
            intelligent, and supportive motherhood companion.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none backdrop-blur-xl placeholder:text-pink-100/40"
            />

            <button className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-semibold transition hover:scale-105">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}