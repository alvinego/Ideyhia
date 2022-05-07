import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';


const StarRating = ({rating}) => {
    const stars = [];
    for(let i=1; i<=5;i++){
        if(i<=rating){
            stars.push(<FontAwesome key={i} name="star" size={11} color="#59cf23" />);
        }else if(i===Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<FontAwesome key={i} name="star-half-full" size={11} color="#59cf23" />);
        }
        else{
            stars.push(<FontAwesome key={i} name="star-o" size={11} color="#59cf23" />);
        }
    }

    return (
        <>
             {stars}
        </>
    )
}

export default StarRating