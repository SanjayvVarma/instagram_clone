import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppColors from '../utils/AppColors'

const CustomBtn = ({ btnTitle, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.btn}>
                    <Text style={styles.txt}>{btnTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn: {
        width: 350,
        backgroundColor: AppColors.BUTTON,
        borderRadius: 5
    },
    txt: {
        color: "white",
        paddingVertical: 12,
        fontSize: 18,
        textAlign: "center"
    }
})