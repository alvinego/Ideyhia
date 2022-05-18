import { View, Text } from 'react-native'
import React from 'react';
import styles from './styles';
import products from '../../data/products';


const ProductScreen = () => {
  return (
    <View>
      <Text style={styles.title}> {products[11].Title} </Text>

      {/* Image */}

      {/* Option Selector */}

      {/* Price */}
      <View style={styles.oPrice}>
          <Text style={styles.price}>
            {products[11].Price} 
          </Text>
          <Text style={styles.oldPrice}>
            {products[11].OldPrice && (<Text style={styles.oldPrice}>{products[11].OldPrice}</Text>)}
          </Text>
      </View>

      {/* Description */} 

      <Text style={styles.store}>
            {products[11].Store}
          </Text>

      {/* Quantity Selector */} 

      {/* Buttons  */}

      
    </View>
  )
};

export default ProductScreen