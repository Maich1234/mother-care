import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setShowNav(false); // scroll down -> hide
      } else {
        setShowNav(true); // scroll up -> show
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#050816] text-white">
      {/* NAVBAR */}
      <AnimatePresence>
        {showNav && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              {/* Logo */}
              <div>
                <h1 className="text-xl font-bold text-pink-200">
                  Mother-Care
                </h1>

                {/* FORCED ONE LINE */}
                <p className="text-xs text-pink-100/70 whitespace-nowrap">
                  Safari ya Mama, Tukiwa Pamoja
                </p>
              </div>

              {/* Desktop Menu */}
              <nav className="hidden items-center gap-8 md:flex text-sm text-white/80">
                <a className="hover:text-pink-200" href="#">Home</a>
                <a className="hover:text-pink-200" href="#">Features</a>
                <a className="hover:text-pink-200" href="#">About</a>
                <a className="hover:text-pink-200" href="#">Contact</a>
              </nav>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-2xl"
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden border-t border-white/10 bg-[#050816]/95"
                >
                  <div className="flex flex-col gap-4 px-6 py-4 text-white/80">
                    <a onClick={() => setMobileOpen(false)} href="/">Home</a>
                    <a onClick={() => setMobileOpen(false)} href="/features">Features</a>
                    <a onClick={() => setMobileOpen(false)} href="/about">About</a>
                    <a onClick={() => setMobileOpen(false)} href="/contact">Contact</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050816]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
          
          <div>
            <h2 className="text-lg font-bold text-pink-200">
              Mother-Care
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Supporting mothers from pregnancy to baby’s first year with care and guidance.
            </p>
          </div>

          <div className="text-sm text-white/70">
            <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
            <p>Home</p>
            <p>Features</p>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div className="text-sm text-white/70">
            <h3 className="mb-3 font-semibold text-white">Contact</h3>
            <p>Email: support@mothercare.com</p>
            <p>Phone: +254 XXX XXX XXX</p>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Mother-Care. All rights reserved.
        </div>
      </footer>
    </div>
  );
}