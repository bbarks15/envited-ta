module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "envited-background": "url('/public/envited_background.png')",
        "social-media-background": "url('/public/Social_Media_Icons.png')",
        "event-cover-photo": "url('/public/Cover_photo.png')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      envitedPurple: "#501FC1",
      envitedPink: "#3f3cbb",
      envitedBlue: "#33aaff",
      envitedGreen: "#06d6a0",
      envitedPink: "#f0567a",
      envitedGrey1: "#2ecc71",
      envitedGrey2: "#4f4f4f",
      envitedGrey3: "#828282",
      envitedGrey4: "#bdbdbd",
      envitedGrey5: "#e0e0e0",
      envitedGrey6: "#f2f2f2",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
