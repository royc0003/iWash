import React from 'react';
import { Text, View } from 'react-native';

export default function Title() {
  return (
    <View style={titleStyle}>
      <Text style={textStyle}>iWash</Text>
    </View>
  );
}

const titleStyle = {
    height: '9%',
    width: '100%',
    paddingTop: '6%',
    backgroundColor: '#000',
    alignItems: 'center',
}

const textStyle = {
  color: '#C0C0C0',
  marginTop: '1%',
}
