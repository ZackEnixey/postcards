import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface ImageListProps {
    images: string[];
    onSelectImage: (image: string) => void;
    selectedImage: string | null;
}

const ImageList: React.FC<ImageListProps> = ({ images, onSelectImage, selectedImage }) => {

  return (
    <div className="ImageList">
      <div className="Carousel">
        <Carousel infiniteLoop={true} showArrows={true} showThumbs={false} showStatus={false} selectedItem={images.indexOf(selectedImage || '')}>
          {images.map((image: any, index: any) => (
            <div key={index} onClick={() => onSelectImage(image)} className={selectedImage === image ? 'Selected' : ''}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageList;
