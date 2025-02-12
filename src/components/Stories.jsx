import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import UserData from '../utils/UserData'
import { useNavigation } from '@react-navigation/native'

const Stories = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
      {
        UserData.map((item) => (
          <View key={item.id} style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('StoryView', { item })}>
              <View style={styles.imgView}>
                <Image style={styles.img} source={item.story.image} />
              </View>
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>{item.username}</Text>
          </View>
        ))
      }
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: 7
  },

  container: {
    marginLeft: 10
  },

  imgView: {
    borderWidth: 3,
    borderRadius: 40,
    padding: 2
  },

  img: {
    height: 70,
    width: 70,
    borderRadius: 35
  }
})