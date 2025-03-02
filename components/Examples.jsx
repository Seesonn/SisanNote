import React, { useState } from 'react';
import m1 from "../assest/m2.jpg"; 
import m2 from "../assest/m1.jpg";
import m3 from "../assest/m3.jpg";

export default function Examples() {
 
  const [mainImage, setMainImage] = useState(m2); 

  
  const thumbnails = [
    { id: 1, src: m1, alt: "Anime  1" },
    { id: 2, src: m2, alt: "Anime  2" },
    { id: 3, src: m3, alt: "Anime  3" },
  ];

  
  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
    
      <div className="w-64 h-64 bg-white rounded-3xl p-2 shadow-lg">
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <img
            src={m1} 
            alt="Anime style transformation example"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

     
      <div className="w-72 h-80 bg-white rounded-3xl p-2 shadow-lg relative">
        <div className="w-full h-[85%] rounded-2xl overflow-hidden">
          <img
            src={mainImage} 
            alt="Original photo and anime transformation"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {thumbnails.map((thumbnail) => (
            <div
              key={thumbnail.id}
              className="w-12 h-12 bg-white rounded-lg overflow-hidden cursor-pointer hover:border-2 hover:border-amber-400"
              onClick={() => handleThumbnailClick(thumbnail.src)}
            >
              <img
                src={thumbnail.src}
                alt={thumbnail.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

   
      <div className="w-64 h-64 bg-white rounded-3xl p-2 shadow-lg">
        <div className="w-full h-full rounded-2xl overflow-hidden">
          <img
            src={m3} 
            alt="Anime "
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}