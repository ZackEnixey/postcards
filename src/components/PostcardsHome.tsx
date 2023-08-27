import React, { useState } from 'react';
import ImageList from './ImageList';
import TextareaCustom from './TextareaCustom';
import PDFGenerator from './PDFGenerator';
import { BlobProvider, PDFViewer } from '@react-pdf/renderer';

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
import SendPdfToEmail from './SendPdfToEmail';

const PostcardsHome: React.FC = () => {
    const [pdfForEmail, setPdfForEmail] = useState<Blob>();
    const [selectedImage, setSelectedImage] = useState<string | null>(postcardFront9);
    const [textToPrint, setTextToPrint] = useState<string>('');

    const frontSideImages = [ postcardFront1, postcardFront2, postcardFront3, postcardFront4, postcardFront5,
        postcardFront6, postcardFront7, postcardFront8, postcardFront9, postcardFront10
    ];
    const backSideImages = [ postcardBackGreen, postcardBackPink, postcardBackYellow, postcardBackBlue ]; // TO DO: randomly assign this as background
    const [selectedColor, setSelectedColor] = useState<string>("pink");

    const colorsArray = ["green", "pink", "gold", "blue"];
    const selectedColorIndex = colorsArray.indexOf(selectedColor);
    const randomBackImage = backSideImages[selectedColorIndex];


    const handleColorClick = (color: string) => {
        setSelectedColor(color);
    };

    const handleSelectImage = (image: string) => {
        setSelectedImage(image);
    };

   
    const generatePdf = (enteredText: string) => {
        setTextToPrint(enteredText);
    }

    const updateTheStatisticsPDF = (blob: Blob) => {
        if (!blob) return;

        if (setPdfForEmail)
            setPdfForEmail(blob);
    };

    const downloadPDF = () => {
        if (pdfForEmail) {
          const blobUrl = URL.createObjectURL(pdfForEmail);
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = 'Uppiness_Gratitude_postcard.pdf'; // Set the desired filename
          a.click();
      
          // Release the object URL
          URL.revokeObjectURL(blobUrl);
        }
      };

    return (
        <div className="PostcardsHome">

            <div className='left_holder'>
                <h2>Select a Postcard Image by clicking on it</h2>
                <div className="flex">
                    <ImageList images={frontSideImages} onSelectImage={handleSelectImage} selectedImage={selectedImage} />
                    
                    {selectedImage && (
                        <div className="ImageContainer">
                            <BlobProvider document={<PDFGenerator selectedImage={selectedImage} enteredText={textToPrint} backImage={randomBackImage} />}>
                                {({blob}) => {
                                    if(blob)
                                        updateTheStatisticsPDF(blob);
                                    return null;
                                }}
                            </BlobProvider>
                        </div>
                    )}
                </div>
            </div>

            <div className='right_holder'>
                <h2>Select a color</h2>
                <div className='colors_pallete'>
                    <div
                        className={`color_circle ${selectedColor ==="green" ? 'check_mark' : ''}`}
                        style={{ background: "#53BD8B" }}
                        onClick={() => handleColorClick("green")}
                    ></div>
                    <div
                        className={`color_circle ${selectedColor ==="pink" ? 'check_mark' : ''}`}
                        style={{ background: "#FF00A7" }}
                        onClick={() => handleColorClick("pink")}
                    ></div>
                    <div
                        className={`color_circle ${selectedColor ==="gold" ? 'check_mark' : ''}`}
                        style={{ background: "#FED100" }}
                        onClick={() => handleColorClick("gold")}
                    ></div>
                    <div
                        className={`color_circle ${selectedColor ==="blue" ? 'check_mark' : ''}`}
                        style={{ background: "#61dafb" }}
                        onClick={() => handleColorClick("blue")}
                    ></div>
                </div>

                <h2 style={{marginTop: "50px"}}>Write a Thoughtful Gratitude Note for the Postcard</h2>
                <TextareaCustom generatePdf={generatePdf}/>
                {/* <SendPdfToEmail pdfForEmail={pdfForEmail} /> */}

                <div className='pdf_viewer_wrapper'>
                    <PDFViewer width="100%" height={600}>
                        <PDFGenerator selectedImage={selectedImage} enteredText={textToPrint} backImage={randomBackImage} />
                    </PDFViewer>
                </div>

                <div className="CarouselArrows">
                    <button onClick={downloadPDF} className="ArrowButton" style={{width: "100%"}}>Download the PDF</button>
                </div>

            </div>
        </div>
    );
};

export default PostcardsHome;