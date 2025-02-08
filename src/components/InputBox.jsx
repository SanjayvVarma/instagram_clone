import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({ placeholder, onChangeText, onBlur, value, touched, secureTextEntry, keyboardType, maxLength, errors }) => {
    return (
        <View style={styles.mainContainer}>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                maxLength={maxLength}
            />

            {errors && touched && <Text style={styles.errText}>{errors}</Text>}
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    mainContainer: {
        height: 78,
    },

    textInput: {
        borderWidth: 1,
        width: 350,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10
    },

    errText: {
        color: 'red',
        paddingLeft: 5
    }
})
