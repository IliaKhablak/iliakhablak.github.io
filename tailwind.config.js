const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBg: "rgba(var(--mainBg))",
        dark: "rgba(var(--dark))",
        font1: "rgba(var(--font1))",
        font2: "rgba(var(--font2))",
        cardBg: "rgba(var(--cardBg))",
        light: "rgba(var(--light))",
        lightBg: "rgba(var(--lightBg))",
        extraLight: "rgba(var(--extraLight))",
        iconBg: "rgba(var(--iconBg))",
        personCardBg: "rgba(var(--personCardBg))",
        personalCardInnerBg: "rgba(var(--personalCardInnerBg))",
        directionsColor1: "rgba(var(--directionsColor1))",
      },
      backgroundImage: {
        mainBgImg:
          "linear-gradient(180deg, #D0C7B8 0%, rgba(188, 183, 181, 0.5) 100%)",
        gym1: "url('./assets/gym1.jpg')",
        gymMin1: "url('./assets/gym1-min.jpg')",
        gym2: "url('./assets/gym2.jpeg')",
        gymMin2: "url('./assets/gym2-min.jpeg')",
        gradientCover:
          "linear-gradient(0deg, rgba(46, 46, 45, 0.4) 0%, rgba(46, 46, 45, 1) 100%)",
        gradientCoverReverse:
          "linear-gradient(180deg, rgba(46, 46, 45, 0.2) 0%, rgba(46, 46, 45, 1) 100%)",
        mainBasicsGym1: "url('./assets/main-basics-1.png')",
        mainBasicsGym1Min: "url('./assets/main-basics-1-min.jpg')",
        mainBasicsGym2: "url('./assets/main-basics-2.png')",
        mainBasicsGym2Min: "url('./assets/main-basics-2-min.jpg')",
        mainBasicsGym3: "url('./assets/main-basics-3.png')",
        mainBasicsGym3Min: "url('./assets/main-basics-3-min.jpg')",
        mainBasicsGym4: "url('./assets/main-basics-4.png')",
        mainBasicsGym4Min: "url('./assets/main-basics-4-min.jpg')",
        directionsBg1: "url('./assets/directions1-min.jpg')",
        cardioBg1: "url('./assets/cardio1-min.jpg')",
        galleryBg1: "url('./assets/gallery1-min.jpg')",
        crossBg: "url('./assets/icons/cross.svg')",
        priceBg1: "url('./assets/priceBg1-min.jpg')",
      },
      fontFamily: {
        euro: ["Eurofontextendedc"],
        play: ["Play"],
      },
      fontSize: {
        clamp14: "clamp(12px, 1.5vw, 14px)",
        clamp15: "clamp(12px, 1.5vw, 15px)",
        clamp16: "clamp(12px, 1.5vw, 16px)",
        clamp18: "clamp(14px, 1.5vw, 18px)",
        clamp20: "clamp(16px, 1.5vw, 20px)",
        clamp50: "clamp(40px, 1.5vw, 50px)",
      },
      transitionProperty: {
        height: "height",
        backgroundImage: "background-image",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".text50": {
          lineHeight: "50px",
          fontSize: "50px",
        },
        ".text45": {
          lineHeight: "45px",
          fontSize: "45px",
        },
        ".text40": {
          lineHeight: "40px",
          fontSize: "40px",
        },
        ".text30": {
          lineHeight: "30px",
          fontSize: "30px",
        },
        ".text28": {
          lineHeight: "28px",
          fontSize: "28px",
        },
        ".text26": {
          lineHeight: "26px",
          fontSize: "26px",
        },
        ".text22": {
          lineHeight: "22px",
          fontSize: "22px",
        },
        ".text20": {
          lineHeight: "20px",
          fontSize: "20px",
        },
        ".text19": {
          lineHeight: "19px",
          fontSize: "19px",
        },
        ".text18": {
          lineHeight: "18px",
          fontSize: "18px",
        },
        ".text16": {
          lineHeight: "16px",
          fontSize: "16px",
        },
        ".text15": {
          lineHeight: "15px",
          fontSize: "15px",
        },
        ".text14": {
          lineHeight: "14px",
          fontSize: "14px",
        },
        ".text13": {
          lineHeight: "13px",
          fontSize: "13px",
        },
        ".text12": {
          lineHeight: "12px",
          fontSize: "12px",
        },
      });
    }),
  ],
};
