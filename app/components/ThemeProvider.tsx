import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { motion } from "framer-motion";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as ThemeMode) || "dark";

    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const themeStyles = useMemo(() => {
    return {
      light: {
        background: "#F5E6D3",
        text: "#2D2D2D",
        grid: "rgba(120,120,120,0.06)",
      },

      dark: {
        background: "#050816",
        text: "#F3E8FF",
        grid: "rgba(120,120,255,0.06)",
      },
    };
  }, []);

  const currentTheme = themeStyles[theme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div
        className="relative min-h-screen overflow-hidden transition-all duration-700"
        style={{
          background: currentTheme.background,
          color: currentTheme.text,
        }}
      >
        {/* Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${currentTheme.grid} 1px, transparent 1px),
              linear-gradient(90deg, ${currentTheme.grid} 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main Mother Glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.08, 1],

            background: [
              "rgba(236,72,153,0.22)",
              "rgba(168,85,247,0.22)",
              "rgba(244,114,182,0.22)",
              "rgba(192,132,252,0.22)",
              "rgba(236,72,153,0.22)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Floating Glow */}
     {/* Moving Ambient Glow */}
<motion.div
  className="absolute h-125 w-125 rounded-full blur-3xl pointer-events-none"
  animate={{
    x: [
      "5vw",
      "65vw",
      "40vw",
      "75vw",
      "15vw",
      "55vw",
      "5vw",
    ],

    // stays away from the top 25% of screen
    y: [
      "35vh",
      "55vh",
      "70vh",
      "45vh",
      "75vh",
      "50vh",
      "35vh",
    ],

    background: [
      "rgba(168,85,247,0.18)",
      "rgba(236,72,153,0.18)",
      "rgba(192,132,252,0.18)",
      "rgba(244,114,182,0.18)",
      "rgba(168,85,247,0.18)",
    ],

    scale: [1, 1.1, 1, 1.05, 1],
  }}
  transition={{
    duration: 60,
    repeat: Infinity,
    ease: "linear",
  }}
/>

        {/* Floating Soft Bubbles */}
        {Array.from({ length: 35 }).map((_, i) => {
          const size = Math.random() * 140 + 60;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = Math.random() * 12 + 10;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full blur-2xl"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.05, 0.12, 0.05],

                background: [
                  "rgba(236,72,153,0.14)",
                  "rgba(168,85,247,0.14)",
                  "rgba(244,114,182,0.14)",
                  "rgba(192,132,252,0.14)",
                ],

                x: [0, 20, -20, 0],
                y: [0, -30, 20, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Floating Particles */}
        {Array.from({ length: 90 }).map((_, i) => {
          const size = Math.random() * 5 + 2;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background:
                  i % 2 === 0
                    ? "rgba(236,72,153,0.7)"
                    : "rgba(192,132,252,0.7)",
              }}
              animate={{
                y: [0, -40],
                opacity: [0, 1, 0],
                scale: [0.6, 1.2, 0.6],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Floating Rounded Squares */}
        {Array.from({ length: 50 }).map((_, i) => {
          const size = Math.random() * 20 + 8;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = Math.random() * 10 + 8;

          return (
            <motion.div
              key={i}
              className="absolute rounded-xl border"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],

                borderColor: [
                  "rgba(168,85,247,0.18)",
                  "rgba(236,72,153,0.18)",
                  "rgba(192,132,252,0.18)",
                ],

                backgroundColor: [
                  "rgba(168,85,247,0.04)",
                  "rgba(236,72,153,0.04)",
                  "rgba(192,132,252,0.04)",
                ],

                boxShadow: [
                  "0 0 10px rgba(168,85,247,0.18)",
                  "0 0 20px rgba(236,72,153,0.18)",
                  "0 0 14px rgba(192,132,252,0.18)",
                ],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}