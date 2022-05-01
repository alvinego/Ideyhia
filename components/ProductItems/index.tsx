import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';


interface ProductItemProps {
    item: {
        id: number,
        store: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number,
    };
}

const ProductItem = ({item}: ProductItemProps) => {

  return (
      <View style={styles.root}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.image}}/>
        <View>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <Text style={styles.price}>
            {item.price}
          </Text>
          <Text style={styles.store}>
            {item.store}
          </Text>
          {/*Ratings*/}
          <View style={styles.ratingsContainer}>
            <FontAwesome name="star" size={11} color="#59cf23" />
            <FontAwesome name="star" size={11} color="#59cf23" />
            <FontAwesome name="star-half-full" size={11} color="#59cf23" />
            <FontAwesome name="star-o" size={11} color="#59cf23" />
          </View>
        </View>
      </View>
      
    </View>

  );
}

export default ProductItem