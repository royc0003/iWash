import React from 'react';
import { ScrollView } from 'react-native';
import Hall from './Hall';
import Block from './Block';
import Machine from './Machine';

export default function Body(props) {
  let componentList;

  switch(props.type){
      case 1:
        if(props.list){
          componentList = props.list.map(item => {
            return <Hall item={item} navigate={props.navigate}/>
          });
        }
        break;
      case 2:
        if(props.list){
          componentList = props.list.map(item => {
            return <Block item={item} navigate={props.navigate}/>
          });
        }
        break;
      case 3:
        if(props.list){
          componentList = props.list.map(item => {
            return <Machine item={item} navigate={props.navigate}/>
          });
        }
        break;
    }

  return (
    <ScrollView style={bodyStyle}>
      {componentList}
    </ScrollView>
  );
}

const bodyStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
}
