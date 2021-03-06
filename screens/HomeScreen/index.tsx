import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import ProductItem from '../../components/ProductItems';
import product from '../../data/products';


const HomeScreen = () => {
  return (
    <View style={styles.root}>
      {/* <ProductItem item = {product[0]}/> */}
      <FlatList
        data={product}
        renderItem={({item}) => <ProductItem item={item}/> }
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
})

export default HomeScreen