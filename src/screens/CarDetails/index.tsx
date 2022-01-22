import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://www.freeiconspng.com/thumbs/audi-png/audi-png-red-image-17.png']}
        />
      </CarImages>
    </Container>
  );
}