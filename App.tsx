import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SafeViewAndroid from './components/Design/SafeViewAndroid';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

export default function App() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ProductScreen/>
      {/* <HomeScreen/> */}
    </SafeAreaView>
  );
}
