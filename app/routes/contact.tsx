import { motion } from "framer-motion";
import { LuMail, LuPhone, LuMapPin, LuHeart} from "react-icons/lu";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 py-20 text-white">
      {/* Background glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* LEFT INFO */}
        <div>
          <span className="rounded-full border border-pink-300/20 bg-pink-400/10 px-5 py-2 text-sm text-pink-100 backdrop-blur-md">
            Get in touch
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
            We are here for
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
              {" "}every mother
            </span>
          </h1>

          <p className="mt-6 text-lg text-pink-100/70">
            Whether you have questions, feedback, or need support,
            Mother-Care is always ready to listen and support your journey.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-pink-500/20 p-3">
                <LuMail className="text-pink-200" />
              </div>
              <div>
                <p className="text-sm text-pink-100/60">Email</p>
                <p className="font-medium">support@mothercare.app</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-purple-500/20 p-3">
                <LuPhone className="text-pink-200" />
              </div>
              <div>
                <p className="text-sm text-pink-100/60">Phone</p>
                <p className="font-medium">+254 700 000 000</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-pink-500/20 p-3">
                <LuMapPin className="text-pink-200" />
              </div>
              <div>
                <p className="text-sm text-pink-100/60">Location</p>
                <p className="font-medium">Kenya (Remote Support)</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 overflow-hidden rounded-[30px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop"
              alt="Mother care support"
              className="h-[300px] w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
        >
          <div className="flex items-center gap-3">
            <LuHeart className="text-pink-200" />
            <h2 className="text-2xl font-semibold">
              Send us a message
            </h2>
          </div>

          <p className="mt-3 text-sm text-pink-100/60">
            We usually respond within a few hours.
          </p>

          <form className="mt-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-pink-100/40"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-pink-100/40"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none placeholder:text-pink-100/40"
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-4 font-semibold transition hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Soft note */}
          <p className="mt-6 text-center text-xs text-pink-100/50">
            Safari ya Mama, Tukiwa Pamoja 🤍
          </p>
        </motion.div>
      </div>
    </div>
  );
}