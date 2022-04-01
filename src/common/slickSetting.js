export const sliderSettings = {
  infinite: false,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 2,
  dots: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: "unslick",
    },
  ],
};
