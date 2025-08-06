// tailwind.config.js

module.exports = {
  
  theme: {
    extend: {
      animation: {
        float: "float 30s ease-in-out infinite", // <-- Aqui está a duração
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
};