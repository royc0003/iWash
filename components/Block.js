import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Block() {
  return (
    <View style={blockStyle}>
      <Text style={blockTextStyle}>Level 12</Text>
      <Image style={imageStyle} source={require('../assets/arrow.png')}/>
    </View>
  );
}

const blockStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#606060',
    borderBottomWidth: 1,
    backgroundColor: '#484848',
    paddingTop: 14,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 12,
}

const blockTextStyle = {
    color: '#C0C0C0',

}

const imageStyle = {
    
}
