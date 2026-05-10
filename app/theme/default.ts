export const themes = {
  light: {
    background: "#F5E6D3",
    text: "#2D2D2D",
    grid: "rgba(120,120,120,0.08)",
    glow: "rgba(168,85,247,0.18)",
    squareBorder: "rgba(168,85,247,0.18)",
    squareBackground: "rgba(168,85,247,0.05)",
  },

  dark: {
    background: "#050816",
    text: "#F3E8FF",
    grid: "rgba(120,120,255,0.08)",
    glow: "rgba(168,85,247,0.3)",
    squareBorder: "rgba(168,85,247,0.2)",
    squareBackground: "rgba(168,85,247,0.05)",
  },
};

export type ThemeMode = keyof typeof themes;