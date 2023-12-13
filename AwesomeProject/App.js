import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import PdfPicker from './components/PdfPicker';
import SubmitButton from './components/SubmitButton';

const App = () => {
  const handlePdfSubmission = (selectedPdf) => {
    // Handle the submission logic here
    console.log('Selected PDF:', selectedPdf);
    // Implement your submission logic, e.g., send the PDF to a server
  };

  return (
    <SafeAreaView>
      <View>
        <Text>PDF Submission App</Text>
        <PdfPicker onPdfSelected={handlePdfSubmission} />
        <SubmitButton onPress={() => handlePdfSubmission} />
      </View>
    </SafeAreaView>
  );
};

export default App;
