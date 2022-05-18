import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import StarRating from '../Design/StarRating';



interface ProductItemProps {
    item: {
        id: number;
        Title: string;
        Store: string;
        Price: number;
        Image: string;
        Ratings: number;
        AvgRatings: number;
        OldPrice: number;
    };

}




const ProductItem = ({item}: ProductItemProps) => {


  return (
      <View style={styles.root}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.Image}}/>
        <View>
          <Text style={styles.title} numberOfLines={3}>
            {item.Title}
          </Text>
          <View style={styles.oPrice}>
            <Text style={styles.price}>
            {item.Price} 
          </Text>
          <Text style={styles.oldPrice}>
            {item.OldPrice && (<Text style={styles.oldPrice}>{item.OldPrice}</Text>)}
          </Text>
          </View>
          <Text style={styles.store}>
            {item.Store}
          </Text>
          <View style={styles.ratingsContainer}>
            <StarRating rating={item.AvgRatings}/>
            <Text style={styles.ratingsText}>{item.Ratings}</Text>
          </View>
        </View>
      </View>
    </View>

  );
}

export default ProductItem