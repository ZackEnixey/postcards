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
                maxLength={500} // Limit to 500 characters
                style={{ marginBottom: '10px' }} // Add some space below the textarea
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <p style={{ color: charactersLeft < 0 ? 'red' : 'inherit' }}>
                    {charactersLeft} characters left
                </p>
                <button onClick={() => generatePdf(enteredText)}> Generate PDF </button>
            </div>
        </div>
    );
};

export default TextareaCustom;
