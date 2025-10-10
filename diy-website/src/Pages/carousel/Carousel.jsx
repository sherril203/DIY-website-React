// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import cups from '../../assets/carousel/cups.png';
// import phone from '../../assets/carousel/phone.png';
// import wall from '../../assets/carousel/wall.png';
// import kits from '../../assets/carousel/kits.png';
// import clock from '../../assets/carousel/clocks.png'

// const Carousel = () => {
//   const settings = {
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   const slides = [wall, kits, cups, phone,clock];

//   return (
//     <div className="w-full mt-21">
//       <Slider {...settings}>
//         {slides.map((img, index) => (
//           <div key={index} className="w-full">
//             <img
//               src={img}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-[410px] object-cover"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cups from '../../assets/carousel/cups.png';
import phone from '../../assets/carousel/phone.png';
import kits from '../../assets/carousel/kits.png';
import clock from '../../assets/carousel/clocks.png';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [ kits, cups, phone, clock];

  return (
    <div className="w-full max-w-screen mx-auto mt-21">
      <Slider {...settings}>
        {slides.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="
                w-full 
                h-48 sm:h-64 md:h-80 lg:h-[410px] 
                object-cover rounded-lg
              "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
