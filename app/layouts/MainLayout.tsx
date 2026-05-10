import { Outlet, Link } from "react-router";
import { CiHeart,  CiFacebook, CiInstagram, } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";


export default function Layout() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-r from-pink-500/20 to-purple-500/20">
              <CiHeart className="h-6 w-6 text-pink-200" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">
                Mother-Care
              </h1>

              <p className="text-xs text-pink-100/60">
                Safari ya Mama, Tukiwa Pamoja
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm text-pink-100/70 transition hover:text-pink-200"
            >
              Home
            </Link>

            <Link
              to="/features"
              className="text-sm text-pink-100/70 transition hover:text-pink-200"
            >
              Features
            </Link>

            <Link
              to="/about"
              className="text-sm text-pink-100/70 transition hover:text-pink-200"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-sm text-pink-100/70 transition hover:text-pink-200"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <button className="rounded-2xl bg-linear-to-r from-pink-500 to-purple-500 px-5 py-2.5 text-sm font-medium shadow-lg shadow-pink-500/20 transition hover:scale-105">
            Join the waitList
          </button>
        </div>
      </header>

      {/* Page Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/10 bg-[#050816]/40 backdrop-blur-2xl">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-r from-pink-500/20 to-purple-500/20">
                <CiHeart className="h-6 w-6 text-pink-200" />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Mother-Care
                </h2>

                <p className="text-xs text-pink-100/60">
                  Safari ya Mama, Tukiwa Pamoja
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-pink-100/60">
              Supporting mothers from the first heartbeat of
              pregnancy to the baby’s first birthday.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-pink-100/70">
              <Link
                to="/"
                className="transition hover:text-pink-200"
              >
                Home
              </Link>

              <Link
                to="/features"
                className="transition hover:text-pink-200"
              >
                Features
              </Link>

              <Link
                to="/about"
                className="transition hover:text-pink-200"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-pink-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-pink-100/70">
              <p>Pregnancy Tracking</p>
              <p>Clinic Reminders</p>
              <p>Baby Care Monitoring</p>
              <p>Vaccination Alerts</p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold">
              Connect
            </h3>

            <div className="mt-5 flex items-center gap-4">
              <button className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <CiFacebook className="h-5 w-5 text-pink-200" />
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <CiInstagram className="h-5 w-5 text-pink-200" />
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <RiTwitterXFill className="h-5 w-5 text-pink-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 text-center text-sm text-pink-100/50">
          © {new Date().getFullYear()} Mother-Care.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}