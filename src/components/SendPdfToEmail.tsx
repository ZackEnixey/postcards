import React, { FC } from 'react';
import emailjs from 'emailjs-com'; 

interface ISendPdfToEmail {
  pdfForEmail: Blob | undefined;
}

const SendPdfToEmail: FC<ISendPdfToEmail> = ({ pdfForEmail }) => {
    
    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        if (!pdfForEmail) return;

        const serviceID = 'service_8nf91r4';
        const templateID = 'template_emduv5b';
        const publicKey = 'UCAVS3iGPn9P-XmpP';
    
        try {
            const attachment = new Blob([pdfForEmail], { type: 'application/pdf' });
            const params = {
                form_name: "_Zahari",
                message: "_message some random text",
                content: attachment
            }

            await emailjs.send(serviceID, templateID, params, publicKey);
        
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Email sending failed:', error);
            alert('Email sending failed. Please check console for details.');
        }
      };
    
      const handleDownloadPdf = () => {
        if (!pdfForEmail) return;

        const blobUrl = URL.createObjectURL(pdfForEmail);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = 'document.pdf';
        a.click();
      };

  return (
      <div>
          <h2>Send Email</h2>
          <form onSubmit={handleFormSubmit}>
              <input type="text" name="to_email" placeholder="Recipient Email" required />
              <input type="text" name="message" placeholder="Message" required />
              <button type="submit">Send Email</button>
          </form>
          {pdfForEmail && (
            <div>
            <h3>Download PDF</h3>
            <button onClick={handleDownloadPdf}>Download PDF</button>
            </div>
        )}
      </div>
  );
};

export default SendPdfToEmail;
