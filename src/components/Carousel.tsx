'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import image1 from '../assets/IMG_2633.jpg';
import image2 from '../assets/IMG_2418.jpg';
import image3 from '../assets/_MG_3608.jpg';
import image4 from '../assets/_MG_2458.jpg';
import image5 from '../assets/_MG_3361.jpg';

const allImages = [
  {
    src: image1,
    alt: 'Fiaca en vivo - Show 1'
  },
  {
    src: image2,
    alt: 'Fiaca en vivo - Show 2'
  },
  {
    src: image3,
    alt: 'Fiaca en vivo - Show 3'
  },
  {
    src: image4,
    alt: 'Fiaca en vivo - Show 4'
  },
  {
    src: image5,
    alt: 'Fiaca en vivo - Show 5'
  }
];

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function Carousel() {
  const [images, setImages] = useState(allImages);

  useEffect(() => {
    // Shuffle images when component mounts
    setImages(shuffleArray(allImages));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-[600px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
} 