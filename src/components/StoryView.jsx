import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'

const StoryView = ({ route }) => {

    const selectedItem = route.params.item;
    const navigation = useNavigation();
    const currentTime = new Date().getTime();
    const storyTimeStamp = new Date().setHours(selectedItem.story.time, 0, 0, 0);
    const storyTime = Math.floor((currentTime - storyTimeStamp) / (1000 * 60 * 60));
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.goBack()
        }, selectedItem.story.time * 1000)
        return () => clearTimeout(timeout);
    }, [])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image style={styles.proImg} source={selectedItem.profile} />
                <Text style={styles.nameTxt}>{selectedItem.name}</Text>
                <Text style={styles.timeTxt}>{storyTime}hr ago</Text>
            </View>
            <View style={styles.storyContainer}>
                <Image
                    source={selectedItem.story.image}
                    style={{
                        width: screenWidth,
                        height: screenHeight - 100,
                        borderBottomRightRadius: 15,
                        borderBottomLeftRadius: 15 
                    }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 10, gap: 15 }}>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            borderColor: 'white',
                            width: 300,
                            paddingHorizontal: 15,
                            color: 'white',
                            borderRadius: 30,
                        }}
                        placeholder='Message'
                        placeholderTextColor='white'
                    />
                    <TouchableOpacity>
                        <Image style={{ width: 23, height: 23, tintColor: 'white' }} source={require('../../assets/message.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default StoryView

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
    },
    proImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    nameTxt: {
        fontSize: 18,
        fontWeight: 600,
        color: 'white'
    },
    timeTxt: {
        fontSize: 18,
        marginLeft: 10,
        color: 'white'
    },
    storyContainer: {
        position: 'absolute',

    }
})