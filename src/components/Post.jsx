import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import UserData from '../utils/UserData'

const Post = () => {

    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={{ marginTop: 5 }}>
            {
                UserData.map((item) => (
                    <View key={item.id} style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 8 }}>
                            <Image
                                source={item.profile}
                                style={{ height: 30, width: 30, borderRadius: 15 }}
                            />
                            <Text style={{ paddingLeft: 10, fontSize: 16, fontWeight: '600', color: 'black' }}>{item.name}</Text>
                        </View>
                        <View>
                            <Image source={item.post.image} style={{ height: 400, width: screenWidth }} />
                        </View>
                        <View style={{ paddingHorizontal: 13, flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/like.png')} style={{ height: 24, width: 28 }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/Comment.png')} style={{ height: 24, width: 24, marginLeft: 15 }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/message.png')} style={{ height: 24, width: 24, marginLeft: 15 }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ marginLeft: 13, marginTop: 10, fontSize: 16, fontWeight: '600', color: 'black' }}>{item.post.like} likes</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 13 }}>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>{item.name}{' '}</Text>
                            <Text style={{ color: 'black' }}>{item.post.caption}</Text>
                        </View>
                    </View>

                ))
            }
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})