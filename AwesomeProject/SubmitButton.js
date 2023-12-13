import React from 'react';
import { Button } from 'react-native';

const SubmitButton = ({ onPress }) => {
    return <Button title="Submit" onPress={onPress} />;
};

export default SubmitButton;
