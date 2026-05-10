import { motion } from "framer-motion";


import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuBaby, LuShieldCheck } from "react-icons/lu";
import { PiBellRingingBold } from "react-icons/pi";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-20 px-6 py-20 lg:flex-row">
        {/* LEFT */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-5 py-2 text-sm text-pink-100 backdrop-blur-md">
              Supporting mothers from pregnancy to baby’s first year
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Warm Care for
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
                {" "}
                Mothers & Babies
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pink-100/70 md:text-xl">
              Mother-Care is building a supportive digital companion
              for mothers — from the first heartbeat of pregnancy to
              the baby’s first birthday.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-lg font-semibold shadow-2xl shadow-pink-500/20 transition hover:scale-105">
                Join the Waitlist
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg backdrop-blur-md transition hover:bg-white/10">
                Learn More
              </button>
            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-pink-200">
                  24/7
                </h3>

                <p className="mt-2 text-sm text-pink-100/60">
                  Smart Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pink-200">
                  0-12
                </h3>

                <p className="mt-2 text-sm text-pink-100/60">
                  Baby Months Covered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pink-200">
                  100%
                </h3>

                <p className="mt-2 text-sm text-pink-100/60">
                  Mother Focused
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-1 items-center justify-center"
        >
          {/* Glow Behind */}
          <div className="absolute h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-3xl" />

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
              alt="Mother and baby"
              className="h-[650px] w-full max-w-[500px] object-cover"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -left-10 top-24 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-pink-500/20 p-3">
                <CiHeart className="text-pink-200" />
              </div>

              <div>
                <p className="text-sm text-pink-100/60">
                  Pregnancy Tracking
                </p>

                <h4 className="font-semibold">
                  Week 24 Healthy
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-8 bottom-24 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-purple-500/20 p-3">
                <PiBellRingingBold className="text-pink-200" />
              </div>

              <div>
                <p className="text-sm text-pink-100/60">
                  Reminder
                </p>

                <h4 className="font-semibold">
                  Clinic Visit Tomorrow
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-5 py-2 text-sm text-pink-100 backdrop-blur-md">
            Designed for motherhood
          </span>

          <h2 className="mt-8 text-4xl font-bold md:text-5xl">
            Everything a Mother Needs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-pink-100/70">
            Built to provide warmth, support, reminders, and guidance
            throughout the motherhood journey.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: CiHeart,
              title: "Pregnancy Tracking",
              description:
                "Track baby growth and maternal wellbeing week by week.",
            },
            {
              icon: PiBellRingingBold,
              title: "Smart Reminders",
              description:
                "Never miss clinics, medications, or vaccinations.",
            },
            {
              icon: LuBaby,
              title: "Baby Monitoring",
              description:
                "Monitor feeding, sleep, growth, and milestones.",
            },
            {
              icon: LuShieldCheck,
              title: "Safe Motherhood",
              description:
                "Receive trusted guidance for healthier motherhood.",
            },
          ].map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                  <Icon className="h-8 w-8 text-pink-200" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-relaxed text-pink-100/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* WAITLIST SECTION */}
      <section className="relative z-10 px-6 pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl lg:grid-cols-2 lg:p-16">
          {/* LEFT */}
          <div>
            <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-5 py-2 text-sm text-pink-100 backdrop-blur-md">
              Coming Soon
            </span>

            <h2 className="mt-8 text-4xl font-bold md:text-5xl">
              Join the Mother-Care Waitlist
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-pink-100/70">
              Be among the first mothers to experience a warm,
              supportive, and intelligent pregnancy & baby care
              companion.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 outline-none backdrop-blur-xl placeholder:text-pink-100/40"
              />

              <button className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-semibold transition hover:scale-105">
                Join Waitlist
                <FaArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* PHONE MOCKUP */}
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div className="absolute h-[350px] w-[350px] rounded-full bg-pink-500/20 blur-3xl" />

            {/* Phone */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative rounded-[40px] border border-white/10 bg-[#0B1020] p-4 shadow-2xl"
            >
              <div className="absolute left-1/2 top-3 h-2 w-24 -translate-x-1/2 rounded-full bg-white/20" />

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop"
                alt="MotherCare App"
                className="h-[620px] w-[300px] rounded-[30px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}