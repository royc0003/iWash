import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';

export default function Hall(props) {

  return (
    <TouchableHighlight onPress={()=> props.navigate.navigate('BlockList', {blockList: props.item.block})}>
      <View style={hallStyle}>
        <Text style={hallTextStyle}>{props.item.name}</Text>
        <Image style={imageStyle} source={require('../assets/arrow.png')}/>
      </View>
    </TouchableHighlight>
  );
}

const hallStyle = {
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

const hallTextStyle = {
    color: '#C0C0C0',

}

const imageStyle = {
    
}
