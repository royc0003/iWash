import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import Body from '../components/Body';
import { data } from '../Data';

export default class Home extends React.Component {
  render(){
    const hallList = [];
    
    Object.keys(data).forEach((key)=>{
      hallList.push(data[key]);
    });

    return (
      <View>
        <Body type={1} list={hallList} navigate={this.props.navigation}/>
      </View>
    );
  }
}