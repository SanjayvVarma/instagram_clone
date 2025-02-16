import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileDetails = () => {
    return (
        <View style={{ paddingHorizontal: 15, marginTop: 25, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                    source={require('../../assets/sanjay.png')}
                    style={{ height: 80, width: 80, borderRadius: 50 }}
                />
                <View style={{ width: 75, alignItems: 'center' }}>
                    <Text style={{ fontSize: 23, fontWeight: "400", color: "black" }}>2</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Posts</Text>
                </View>
                <View style={{ width: 75, alignItems: 'center' }}>
                    <Text style={{ fontSize: 23, fontWeight: "400", color: "black" }}>1.2M</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Followers</Text>
                </View>
                <View style={{ width: 75, alignItems: 'center' }}>
                    <Text style={{ fontSize: 23, fontWeight: "400", color: "black" }}>0</Text>
                    <Text style={{ fontSize: 15, color: "black" }}>Following</Text>
                </View>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "black", marginTop: 10 }}>Supreme 💖</Text>
            <Text style={{ color: "black" }}>React Native</Text>
            <Text style={{ color: "black" }}>Insta clone</Text>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>See Translation</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginHorizontal: 10 }}>
                <TouchableOpacity>
                    <Text
                        style={{
                            backgroundColor: "#E1E1E1",
                            width: 150,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            fontSize: 16,
                            fontWeight: "600",
                            borderRadius: 5,
                            textAlign: 'center',
                            color: 'black'
                        }}> Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text
                        style={{
                            backgroundColor: "#E1E1E1",
                            width: 150,
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            fontSize: 16,
                            fontWeight: "600",
                            borderRadius: 5,
                            textAlign: 'center',
                            color: 'black'
                        }}> Share Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileDetails

const styles = StyleSheet.create({})