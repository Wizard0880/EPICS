import React from 'react';
import { Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const PdfPicker = ({ onPdfSelected }) => {
    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });
            onPdfSelected(result.uri);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker
            } else {
                console.error('Error picking PDF', err);
            }
        }
    };

    return <Button title="Select PDF" onPress={pickDocument} />;
};

export default PdfPicker;
