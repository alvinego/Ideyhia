import { View, Text, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'

const ImageCarousel = ({ images }: {images: [string]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
  return (
    <View>
      <FlatList
      data={images}
      renderItem={({item}) => (
          <Image style= {[styles.image, {width: windowWidth - 40}]} source={{ uri: item}}/>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={windowWidth-40}
      snapToAlignment={'center'}
      decelerationRate={'fast'}
      viewabilityConfig={{
        viewAreaCoveragePercentThreshold: 50,
      }}
      onViewableItemsChanged={({ viewableItems }) => {
        console.log(viewableItems);
      }}
      />

      {/* <View style={styles.dots}>
        {images.map((image, index) => (
        <View style={[styles.dot, {backgroundColor: index === activeIndex? '#c9c9c9': '#ededed'} ]}/>
      ))}
      </View> */}

      
    </View>
  )
}

const styles = StyleSheet.create({
    root: {

    },
    image: {
      height: 250,
      resizeMode: 'contain',
      margin: 10,
    },
    dot: {
      width: 10,
      height: 25,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#c9c9c9',
      margin: 5,
      backgroundColor: '#ededed'
    },
    dots: {
      flexDirection: 'row',
      justifyContent: 'center',
    }
})

export default ImageCarousel