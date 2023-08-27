import React, { FC, useState } from "react";

interface ITextareaCustom {
    generatePdf(data: string): void;
}

const TextareaCustom: FC<ITextareaCustom> = ({ generatePdf }) => {
    const [enteredText, setEnteredText] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        if (newText.length <= 500) {
            setEnteredText(newText);
        }
    };

    const charactersLeft = 500 - enteredText.length;

    return (
        <div style={{ width: "100%" }}>
            <textarea
                placeholder="Enter your text here..."
                value={enteredText}
                onChange={handleTextChange}
                maxLength={500}
                style={{ marginBottom: '10px' }} 
            />
            <div className="textarea_buttons">
                <p style={{ marginTop: "0px",  color: charactersLeft < 0 ? 'red' : 'inherit' }}>
                    {charactersLeft} characters left
                </p>
                <div className="CarouselArrows">
                    <button onClick={() => generatePdf(enteredText)} className="ArrowButton" style={{width: "200px"}}>Generate PDF</button>
                </div>
            </div>
        </div>
    );
};

export default TextareaCustom;
