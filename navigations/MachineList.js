import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Title from '../components/Title';
import Body from '../components/Body';

export default class MachineList extends React.Component {
  render(){
    const machineList = this.props.navigation.getParam('machineList');
    
    return (
      <View>
        <Body type={3} list={machineList} navigate={this.props.navigation}/>
      </View>
    );
  }
}