import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

const ProfileHeader = () => {

    const [open, setOpen] = useState(false)

    const handleModel = () => {
        setOpen(!open)
    }

    return (
        <View style={{ paddingHorizontal: 15, paddingTop: 10, height: 55 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: '500', color: 'black' }}>sanjayazad_</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={require('../../assets/footer/addPost.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleModel}>
                        <Image
                            style={{ height: 35, width: 24, marginLeft: 10 }}
                            source={require('../../assets/menu.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={open}
                onRequestClose={() => setOpen(!open)}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: '#fff', height: 550, borderTopEndRadius: 25, borderTopStartRadius: 25 }}>
                        <TouchableOpacity onPress={handleModel}>
                            <Image
                                source={require('../../assets/modalClose.png')}
                                style={{ alignSelf: 'center', height: 30, width: 30, }}
                            />
                            <View style={{ paddingHorizontal: 20 }}>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', paddingVertical: 15 }}>Setting and privacy</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', paddingVertical: 15 }}>Your activity</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', paddingVertical: 15 }}>Archive</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', paddingVertical: 15 }}>Saved</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', paddingVertical: 15 }}>SuparVision</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', paddingVertical: 15 }}>Meta Varified</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', paddingVertical: 15 }}>Close Friends</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', paddingVertical: 15 }}>Favorites</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({})