import React from 'react';
import {Card, Title} from 'react-native-paper';
import {Cover} from './restaurant-info-card.styles';

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
      <Cover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </Card>
  );
};
