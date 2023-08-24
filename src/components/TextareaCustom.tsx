import { FC, useState } from "react";

interface ITextareaCustom {
    generatePdf(data: string): void;
}

const TextareaCustom: FC<ITextareaCustom> = ({ generatePdf }) => {
    const [enteredText, setEnteredText] = useState<string>('');
    
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredText(event.target.value);
    };

    return (
        <div>
            <textarea
            placeholder="Enter your text here..."
            value={enteredText}
            onChange={(e: any) => handleTextChange(e)}
            />
            <button onClick={() => generatePdf(enteredText)}> Generate PDF </button>
        </div>
    )
}

export default TextareaCustom;