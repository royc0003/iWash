import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Title from '../components/Title';
import Body from '../components/Body';

export default class BlockList extends React.Component {
  render(){
    const blockList = this.props.navigation.getParam('blockList');
    
    return (
      <View>
        <Body type={2} list={blockList} navigate={this.props.navigation}/>
      </View>
    );
  }
}