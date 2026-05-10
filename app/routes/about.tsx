import { motion } from "framer-motion";
import {LuBaby, LuShieldCheck, LuUsers} from "react-icons/lu"
import { CiHeart } from "react-icons/ci";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden px-6 py-20 text-white">
      {/* SOFT BACKGROUND GLOW */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl"
        animate={{
          background: [
            "rgba(236,72,153,0.18)",
            "rgba(168,85,247,0.18)",
            "rgba(244,114,182,0.18)",
            "rgba(192,132,252,0.18)",
          ],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HERO */}
        <div className="text-center">
          <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-5 py-2 text-sm text-pink-100 backdrop-blur-md">
            About Mother-Care
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">
            Caring for Two Hearts at Once
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-pink-100/70">
            Mother-Care is a warm digital companion designed to support
            mothers from the first day of pregnancy to the baby’s first
            year — guiding every step with care, reminders, and love.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-pink-500/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop"
              className="relative h-[450px] w-full rounded-[40px] object-cover border border-white/10"
              alt="Mother care"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold">
              Why Mother-Care Exists
            </h2>

            <p className="mt-6 text-pink-100/70 leading-relaxed">
              Many mothers go through pregnancy and early motherhood
              without enough guidance, reminders, or emotional support.
              Mother-Care was built to change that — combining care,
              technology, and simplicity into one gentle experience.
            </p>

            <p className="mt-4 text-pink-100/70 leading-relaxed">
              We believe every mother deserves reassurance, clarity,
              and support at every stage — from the first heartbeat
              to the first steps.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold">Our Core Values</h2>
          <p className="mt-4 text-pink-100/70">
            Built around love, safety, and care for every mother.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: CiHeart,
              title: "Love",
              desc: "Everything starts with compassion for mothers.",
            },
            {
              icon: LuShieldCheck,
              title: "Safety",
              desc: "Trusted guidance for every stage of motherhood.",
            },
            {
              icon: LuBaby,
              title: "Care",
              desc: "Supporting both mother and baby equally.",
            },
            {
              icon: LuUsers,
              title: "Community",
              desc: "No mother should walk alone.",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20">
                  <Icon className="text-pink-200" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-pink-100/70">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* FINAL CTA */}
        <div className="mt-28 text-center">
          <div className="mx-auto max-w-3xl rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
            <h2 className="text-3xl font-bold">
              From Bump to Baby — We Walk With You
            </h2>

            <p className="mt-4 text-pink-100/70">
              Join the waitlist and be part of a movement that brings
              calm, care, and confidence to motherhood.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-semibold transition hover:scale-105">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}