import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const B3 = () => {
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);
        if (!text.trim()) {
            setError('Vui lòng không để trống');
        } else {
            setError('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, error && styles.inputError]}
                value={inputText}
                onChangeText={handleInputChange} />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 8
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 15
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});

export default B3;
