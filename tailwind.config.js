/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : "Poppins",
        "reenie-beanie" : "Reenie Beanie"
      },
      backgroundColor : {
        "main" : "#5D5FEF",
        "fading-red" : "#F76570",
        "darken" : "rgba(0, 0, 0, 0.32)",
        "more-dark" : "rgba(0, 0, 0, 0.5)"
      },
      textColor: {
        "main-gray": "#6E6E6E",
        "fading-orange" : "#F3A46B",
        "main" : "#5D5FEF"
      },
      borderColor: {
        "fading-gray" : "rgba(255, 255, 255, 0.18)"
      },
      backgroundImage: {
        "hero" : "url('img/bg/hero-bg.png')",
        "city-walk-tour" : "url('img/more-info-card/city-walk-tour.png')",
        "electric-bike" : "url('img/more-info-card/electric-bike.jpg')",
        "skyscraper-view" : "url('img/more-info-card/skyscraper-view.jpg')",
        "chiang-mai" : "url('img/card/chiang-mai.jpg')",
        "chao-praya" : "url('img/card/chao-praya.jpg')",
        "bangkok" : "url('img/card/bangkok.jpg')",
        "greece" : "url('img/card/greece.jpg')",
        "egpyt" : "url('img/card/egypt.jpg')",
        "africa" : "url('img/card/africa.jpg')",
        "france" : "url('img/card/france.jpg')",
        "adventure-hero-bg" : "url('img/bg/adventure-hero-bg.jpg')",
        "youtube-mockup" : "url('img/bg/youtube-mockup.jpg')",
        "aside-next-adventure" : "url('img/aside-image-next-adventure.jpg')",
        "our-package" : "url('img/bg/our-package.jpg')",
        'nara' : "url('img/card/nara.jpg')",
        "athenes" : "url('img/card/athenes.jpg')",
        "footer" : "url('img/footer.jpg')"

      },
      colors : {
        "hero-icon" : "#14B9D5"
      }
    },
  },
  plugins: [],
}