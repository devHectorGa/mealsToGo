import React from 'react';
import styled from 'styled-components/native';
import {Card, Text} from 'react-native-paper';

const Title = styled(Text)`
  padding: 20px;
`;

const Cover = styled(Card.Cover)`
  padding: 20px;
`;

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
