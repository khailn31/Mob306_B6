import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation,route}) => {
  
  return (
    <View >

      <Button title='Chuyển màn hình' onPress={() => {
        navigation.navigate('Profile', { name: 'Khai',mssv:'ph29864' })

      }} />
      <Text style={{fontSize:30,textAlign:'center',marginTop:30}}>
        {route.params}
      </Text>
      

      
    </View>
  )
}

export default HomeScreen