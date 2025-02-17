import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import UserData from '../utils/UserData'
import { useNavigation } from '@react-navigation/native'

const Stories = () => {

  const navigation = useNavigation()

  return (
    <ScrollView style={styles.mainContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
      {
        UserData.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('StoryView', { item })}
            style={styles.storyItem}
          >
            <View style={styles.imgView}>
              <Image style={styles.img} source={item.story.image} />
            </View>
            <Text style={styles.username} numberOfLines={1}>{item.username}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },

  storyItem: {
    alignItems: 'center',
    marginLeft: 10,
  },

  imgView: {
    borderWidth: 3,
    borderRadius: 50,
    padding: 2,
    borderColor: '#f74f4f',
  },

  img: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },

  username: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    width: 70,
  },
});