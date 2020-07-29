import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { colors } from "./styles";
import HotelView from './screens/HotelView'
import ProfileView from './screens/ProfileView';

export default function App() {
  return (


    <View style={styles.container}>
      <HotelView />
      <ProfileView />
      <StatusBar barStyle="light-content" />
    </View>

  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
