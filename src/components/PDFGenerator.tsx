import React from 'react';
import { Document, Page, Image, Text, View, StyleSheet } from '@react-pdf/renderer';

interface PDFGeneratorProps {
  selectedImage: string | null;
  enteredText: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    margin: 30,
  },
  image: {
    width: '50%',
    height: 'auto',
    marginRight: 20,
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
});

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ selectedImage, enteredText }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Image src={selectedImage || ''} style={styles.image} />
          <Text style={styles.text}>{enteredText}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
