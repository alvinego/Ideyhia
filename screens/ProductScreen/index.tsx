import { View, Text } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import products from '../../data/products';
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';


const ProductScreen = () => {

  const [selectedOption, setSelectedOption] = useState(products[11].Options);
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.root}>
      <Text style={styles.title}> {products[11].Title} </Text>

      {/* Image */}

      <ImageCarousel images={products[11].Image}/>

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

      <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue ) =>
        setSelectedOption(itemValue)
        }>
          {products[11].Options.map(option => (
            <Picker.Item label={option} value={option} key={products[11].id} />
          ))}
        
      </Picker>

      {/* Buttons  */}

      <Button text={'Add To Cart'} onPress={() => {console.warn('Add to cart')}}/>
      <Button text={'Buy Now'} onPress={() => {console.warn('Buy Now')}}/>

      
    </View>
  )
};


export default ProductScreen