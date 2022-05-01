import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import ProductItem from '../../components/ProductItems';
import products from '../../data/products';


const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <ProductItem item={products[0]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
})

export default HomeScreen