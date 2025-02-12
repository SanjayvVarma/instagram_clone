import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image style={styles.logoSize} source={require('../../assets/logoInsta.png')} />
            </View>
            <View style={styles.likeContainer}>
                <TouchableOpacity style={{ marginRight: 15 }}>
                    <Image style={styles.likeMess} source={require('../../assets/like.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ position: 'relative' }}>
                        <Image style={styles.likeMess} source={require('../../assets/message.png')} />
                        <View style={styles.message}>
                            <Text style={styles.messText}>5</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60
    },

    logoSize: {
        width: 123,
        height: 120,
        resizeMode: "contain"
    },

    likeMess: {
        width: 23,
        resizeMode: "contain"
    },

    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    message: {
        position: 'absolute',
        bottom: 253,
        left: 13
    },
    messText: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
        fontSize: 9,
        color: '#fff'
    }
})