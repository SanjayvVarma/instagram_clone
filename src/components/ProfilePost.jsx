import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import UserData, { typeData } from '../utils/UserData'

const ProfilePost = () => {

  const [select, setSelect] = useState(1)
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const renderItem = (item) => (
    <View>
      <Image source={item.item.post.image} style={{ height: 130, width: 130, margin: 1, borderColor: '#212121', borderWidth: 0.5, }} />
    </View>
  )




  return (
    <View style={{ paddingHorizontal: 3, marginTop: 20, }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {
          typeData.map((item) => (
            <View key={item.id} style={{ width: 196.3, paddingBottom: 15, borderBottomWidth: select === item.id ? 1 : 0 }}>
              <TouchableOpacity onPress={() => setSelect(item.id)}>
                <Image source={item.image} style={{ tintColor: 'black', alignSelf: 'center', width: 35, height: 35, }} />
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
      {
        select == 1 &&
        < FlatList
          data={UserData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  )
}

export default ProfilePost

const styles = StyleSheet.create({})