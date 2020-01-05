import React from 'react';
import { ScrollView } from 'react-native';
import Hall from './Hall';
import Block from './Block';
import Machine from './Machine';

export default function Body() {
  return (
    <ScrollView style={bodyStyle}>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
       <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Block/>
      <Block/>
      <Machine/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
      <Hall/>
    </ScrollView>
  );
}

const bodyStyle = {
    width: '100%',
    height: '91%',
    backgroundColor: '#FFF',
}
