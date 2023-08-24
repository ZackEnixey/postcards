import React from 'react';
import { Document, Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';

interface PDFGeneratorProps {
  selectedImage: string | null;
  enteredText: string;
  backImage: string | null;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    width: '80%',
    height: 'auto',
  },
  bottomImage: {
    width: '80%',
    height: 'auto',
    marginTop: 20,
  },
  textOnImage: {
    position: 'absolute',
    top: '70%',
    left: '30%',
    width: '52%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
});

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ selectedImage, enteredText, backImage }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Display the selected image at the top */}
          <Image src={selectedImage || ''} style={styles.topImage} />

          {/* Display the imported bottom image */}
          <Image src={backImage || ''} style={styles.bottomImage} />

          {/* Display the entered text over the imported bottom image */}
          <View style={styles.textOnImage}>
            <Text style={styles.text}>{enteredText}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
