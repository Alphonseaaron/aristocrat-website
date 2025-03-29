
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Photos = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      caption: "Aristocrats Insurance Brokers Headquarters"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
      caption: "Team Building Event 2022"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
      caption: "Annual Client Meeting"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
      caption: "Corporate Social Responsibility Initiative"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      caption: "Staff Recognition Ceremony"
    }
  ];

  const [activePhoto, setActivePhoto] = React.useState(photos[0]);

  const handlePhotoClick = (photo) => {
    setActivePhoto(photo);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">Company Photos</h1>
        
        {/* Main large photo view */}
        <div className="mb-8">
          <div className="relative w-full h-[500px] bg-aristocrat-gray rounded-lg overflow-hidden">
            <img 
              src={activePhoto.src} 
              alt={activePhoto.caption} 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-center text-lg mt-4 font-medium">{activePhoto.caption}</p>
        </div>

        {/* Carousel of thumbnails */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id} className="basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div 
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activePhoto.id === photo.id 
                      ? 'ring-4 ring-aristocrat-green' 
                      : 'hover:opacity-80'
                  }`}
                  onClick={() => handlePhotoClick(photo)}
                >
                  <div className="h-32 bg-aristocrat-gray rounded-md overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.caption} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs mt-2 text-center line-clamp-2">{photo.caption}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default Photos;
