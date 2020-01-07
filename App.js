import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './navigations/Home';
import BlockList from './navigations/BlockList';
import MachineList from './navigations/MachineList';


const RootStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'iWash',
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#C0C0C0',
    }
  },
  BlockList: {
    screen: BlockList,
    navigationOptions: {
      title: 'Block/Level',
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#C0C0C0',
    }
  },
  MachineList: {
    screen: MachineList,
    navigationOptions: {
      title: 'Washing Machines',
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#C0C0C0',
    }
  },
});

const AppContainer = createAppContainer(RootStack);


export default function App() {
  return (
    <AppContainer>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    /*
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    */
    backgroundColor: '#000',
  },
});
