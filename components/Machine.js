import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Machine(props) {
  return (
    <View style={machineStyle}>
      <Text style={machineTextStyle}>{props.item.name}</Text>
      <Image style={imageStyle} source={props.item.status ? tick : dash}/>
    </View>
  );
}

const dash = require('../assets/dash.png');
const tick = require('../assets/tick.png');

const machineStyle = {
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

const machineTextStyle = {
    color: '#C0C0C0',

}

const imageStyle = {
    
}
