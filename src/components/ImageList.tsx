import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface ImageListProps {
  images: string[];
  onSelectImage: (image: string) => void;
  selectedImage: string | null;
}

const ImageList: React.FC<ImageListProps> = ({ images, onSelectImage, selectedImage }) => {
  const [selectedIndex, setSelectedIndex] = useState(images.indexOf(selectedImage || ''));

  const handlePrevious = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
  };

  const checkMark = () => {
    return (
      <div className="check-wrap"></div>
    )
  }

  return (
    <div className="ImageList">

        
        <div className="carousel_holder">
        <Carousel showArrows={false} showThumbs={false} showStatus={false} selectedItem={selectedIndex}>
          {images.map((image: any, index: any) => (
            <div key={index} onClick={() => onSelectImage(image)} className={` ${selectedImage === image ? 'Selected' : ''} cursor-pointer`}>
              {image === selectedImage && (
                <div className='sellected-image'>{checkMark()}</div>
              )}
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ maxWidth: '100%', height: 'auto', border: selectedImage === image ? '2px solid #61E7A8' : 'none' }}
              />
            </div>
          ))}
        </Carousel>

          <div className="CarouselArrows">
            <button onClick={handlePrevious} className="ArrowButton">Previous</button>
            <button onClick={handleNext} className="ArrowButton">Next</button>
          </div>
        </div>
    </div>
  );
};

export default ImageList;
