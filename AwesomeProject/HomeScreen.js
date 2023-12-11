// Import necessary modules from React and React Native
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

// Functional component for the screen with the button
const HomeScreen = ({ navigation }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle button press
    const handleSelectPress = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });

            console.log(result);

            // You can use the selected file data as needed
            setSelectedFile(result);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // Handle document picker cancellation
                console.log('Document picker cancelled');
            } else {
                // Handle errors
                console.error('Error picking document:', err);
            }
        }
    };

    // Return the JSX code for the screen
    return (
        <View style={styles.container}>
            {/* Blank row with text */}
            <View style={styles.blankRow}>
                <Text style={styles.blankText}>Click to select a file</Text>
            </View>

            {/* Column for selected file information */}
            {selectedFile && (
                <View style={styles.selectedFileContainer}>
                    <Text style={styles.selectedFileText}>
                        Selected File: {selectedFile.name}
                    </Text>
                </View>
            )}

            {/* Button component */}
            <TouchableOpacity style={styles.button} onPress={handleSelectPress}>
                <Text style={styles.buttonText}>Select PDF</Text>
            </TouchableOpacity>
        </View>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blankRow: {
        marginBottom: 20,
    },
    blankText: {
        fontSize: 18,
        color: 'gray',
    },
    selectedFileContainer: {
        marginVertical: 10,
    },
    selectedFileText: {
        fontSize: 16,
        color: 'green',
    },
    button: {
        backgroundColor: 'blue', // Change the color as needed
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

// Export the component for use in other files
export default HomeScreen;
