import { useNavigation } from '@react-navigation/native';

import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
} from './styles';

export function Home() {
  const navigation = useNavigation<any>();

  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://www.freeiconspng.com/thumbs/audi-png/audi-png-red-image-17.png'
  }
  const carDataTwo = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://freepikpsd.com/file/2019/10/porsche-panamera-png-5-Transparent-Images.png'
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails')
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) =>
          <Car data={carDataOne}
            onPress={handleCarDetails}
          />}
      />
    </Container>
  );
}