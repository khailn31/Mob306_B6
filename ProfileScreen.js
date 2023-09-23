import { View, Text, Button, TextInput, BackHandler } from 'react-native'
import React from 'react'


const ProfileScreen = ({ navigation, route }) => {
  let data
  return (

    <View>

      <Text style={{ fontSize: 25, margin: 30, textAlign: 'center' }}>Thông tin SV:
        {route.params.name} - {route.params.mssv}</Text>

      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        placeholder=' nhap data'
        onChangeText={(value) => {
          data = value
        }}
        value={data}
      />
      <View style={{flexDirection:'row',margin:10}}>
      <Button title='Back' onPress={() => {
        navigation.navigate('Home', data)
      }} />
      <Button title='Next' onPress={() => {
        navigation.navigate('newScreen')
      }} />
      </View>
    </View>
  )
}

export default ProfileScreen