import React, { useState } from 'react';
import ImageList from './ImageList';
import PDFGenerator from './PDFGenerator';
import { PDFViewer } from '@react-pdf/renderer';

import postcardFront1 from '../postcardImages/postcardFront1.png';
import postcardFront2 from '../postcardImages/postcardFront2.png';
import postcardFront3 from '../postcardImages/postcardFront3.png';
import postcardFront4 from '../postcardImages/postcardFront4.png';
import postcardFront5 from '../postcardImages/postcardFront5.png';
import postcardFront6 from '../postcardImages/postcardFront6.png';
import postcardFront7 from '../postcardImages/postcardFront7.png';
import postcardFront8 from '../postcardImages/postcardFront8.png';
import postcardFront9 from '../postcardImages/postcardFront9.png';
import postcardFront10 from '../postcardImages/postcardFront10.png';

import postcardBackBlue from '../postcardImages/postcardBackBlue.png';
import postcardBackGreen from '../postcardImages/postcardBackGreen.png';
import postcardBackPink from '../postcardImages/postcardBackPink.png';
import postcardBackYellow from '../postcardImages/postcardBackYellow.png';

const PostcardsHome: React.FC = () => {
    const frontSideImages = [ postcardFront1, postcardFront2, postcardFront3, postcardFront4, postcardFront5,
        postcardFront6, postcardFront7, postcardFront8, postcardFront9, postcardFront10
    ];

    const backSideImages = [ postcardBackBlue, postcardBackGreen, postcardBackPink, postcardBackYellow ]; // TO DO: randomly assign this as background

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [enteredText, setEnteredText] = useState<string>('');

    const handleSelectImage = (image: string) => {
        setSelectedImage(image);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredText(event.target.value);
    };

    const download = () => {
        console.log("download");
    }

    return (
        <div className="App">
        <h2>Select a Postcard Image by clicking on it, and type a gratitude note</h2>
        <textarea
            placeholder="Enter your text here..."
            value={enteredText}
            onChange={(e: any) => handleTextChange(e)}
            />
        <button onClick={download}>DOWNLOAD</button>

        <div className="flex">
            <ImageList images={frontSideImages} onSelectImage={handleSelectImage} selectedImage={selectedImage} />
            
            {selectedImage && (
                <div className="ImageContainer">
                    <img src={selectedImage} alt="Selected Postcard" className="SelectedImage" />
                    <PDFViewer width="100%" height={600}>
                        <PDFGenerator selectedImage={selectedImage} enteredText={enteredText} />
                    </PDFViewer>
                </div>
            )}
        </div>
        </div>
    );
};

export default PostcardsHome;