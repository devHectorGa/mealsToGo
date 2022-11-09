import React from 'react';
import {Searchbar} from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {ElementContainer, MainContainer} from './restaurants.screen.styles';

export const RestaurantsScreen = () => {
  return (
    <MainContainer>
      <ElementContainer>
        <Searchbar />
      </ElementContainer>
      <ElementContainer full>
        <RestaurantInfoCard />
      </ElementContainer>
    </MainContainer>
  );
};
