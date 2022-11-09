import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://cdn.pixabay.com/photo/2022/10/31/04/55/woman-7558886_1280.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant;
  return (
    <Card elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {padding: 20, backgroundColor: 'white'},
  title: {padding: 16},
});
