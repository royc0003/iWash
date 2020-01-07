import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

export default function Block(props) {

  return (
    <TouchableHighlight onPress={()=> props.navigate.navigate('MachineList', {machineList: props.item.machine})}>
      <View style={blockStyle}>
        <Text style={blockTextStyle}>{props.item.name}</Text>
        <Image style={imageStyle} source={require('../assets/arrow.png')}/>
      </View>
    </TouchableHighlight>
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
