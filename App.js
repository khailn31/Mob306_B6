// import React, {useEffect, useState} from 'react';
// import {ActivityIndicator, FlatList, Text, View,Button,TouchableHighlight,TouchableNativeFeedback} from 'react-native';

// const App = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const handlePress = () => {
//     alert('TouchableHighlight was pressed!');
//   };
//   // Hàm này được gọi khi người dùng nhấn nút "Fetch Data"
//   const fetchData = () => {
//     setLoading(true);
//     setError(null);

//     // Gửi yêu cầu HTTP GET đến một API (ví dụ: JSONPlaceholder)
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then((response) => response.json())
//       .then((json) => {
//         setData(json);
//       })
//       .catch((e) => {
//         setError(e.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     {loading ? (
//       <Text>Loading...</Text>
//     ) : error ? (
//       <Text>Error: {error}</Text>
//     ) : data ? (
//       <>
//         <Text>Title: {data.title}</Text>
//         <Text>Body: {data.body}</Text>
//       </>
//     ) : (
//       <Text>No data available</Text>
//     )}

//     <Button title="Fetch Data" onPress={fetchData} />
//     <TouchableHighlight
//         onPress={handlePress}
//         underlayColor="lightgray"
        
//       >
//         <View >
//           <Text>Press Me (TouchableHighlight)</Text>
//         </View>
//       </TouchableHighlight>
//       <TouchableNativeFeedback
//           onPress={handlePress}
//           background={TouchableNativeFeedback.Ripple('red', false)}
//         >
//           <View >
//             <Text >Press Me (TouchableNativeFeedback)</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//   </View>
//   );
// };

// export default App;
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import HomeScreen from './HomeScreen';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Button } from 'react-native';

import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import newScreen from './newScreen';


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
        name="Profile" component={ProfileScreen} 
        options={{ title: 'Profile' }}/>
    
      <Stack.Screen 
        name="newScreen" component={newScreen} 
        options={{ title: 'newScreen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}