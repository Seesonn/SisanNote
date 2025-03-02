import React from 'react';
import m1 from "../assest/m1.jpg"; 
import m2 from "../assest/m2.jpg";
import m3 from "../assest/m3.jpg";


const AnimeSection = () => {
  const animeStyles = [
    {
      id: 1,
      name: 'Anime',
      imgUrl: m2,
    },
    {
      id: 2,
      name: 'Sisan Anime',
      imgUrl: m1,
    },
    {
      id: 3,
      name: 'Roshan Anime',
      imgUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/7gkyreyl-1920.jpg",
    },
    {
      id: 4,
      name: 'Niroj Anime',
      imgUrl: m3,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Explore the library and choose your favorite anime style
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Turn your photo into anime with just one click. Simply upload your video, choose an anime style, and witness the magic of AI anime filters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {animeStyles.map((style) => (
          <div key={style.id} className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group">
            <img 
              src={style.imgUrl} 
              alt={style.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
             
              
              <div className="p-4 w-full">
                <h3 className="text-xl font-semibold text-white">{style.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeSection;