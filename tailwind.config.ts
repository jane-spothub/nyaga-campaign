import type { Config } from "tailwindcss";

const colors = {
    // Primary & Accent
    primary: {
        DEFAULT: "#0B1D4D",       // Deep Royal/Navy
        light: "#1C2A5C",
        dark: "#08153A",
    },
    accent: {
        DEFAULT: "#FFC25E",       // Sunrise Amber
        light: "#FFD78F",
        dark: "#CC9C4B",
    },

    // Backgrounds
    background: {
        light: "#F9F9F8",
        DEFAULT: "#FFFFFF",
        dark: "#0B1D4D",
    },

    // Text
    text: {
        light: "#FFFFFF",
        DEFAULT: "#111827",
        muted: "#6B7280",
        dark: "#E0E7FF",
    },

    // Glass / Frosted surfaces
    glass: {
        DEFAULT: "rgba(255,255,255,0.3)",
        dark: "rgba(11,29,77,0.3)",
        border: "rgba(255,255,255,0.25)",
    },

    // Hover states
    hover: {
        primary: "#08153A",
        accent: "#FFD78F",
    },

    // Neutral
    neutral: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
    },
};

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors,
            backdropBlur: {
                glass: "12px",
            },
            boxShadow: {
                glass: "0 4px 30px rgba(0,0,0,0.1)",
            },
            gradientColorStops: {
                "hero-light": colors.primary.light,
                "hero-dark": colors.primary.dark,
                "accent-light": colors.accent.light,
                "accent-dark": colors.accent.dark,
            },
        },
    },
    plugins: [],
};

export default config;
