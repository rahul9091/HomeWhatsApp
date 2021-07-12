import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from '../Screens/Chat';
import Status from '../Screens/Status';
import Calls from '../Screens/Calls';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
        activeTintColor:'white',
        inactiveTintColor:"#d1d3bd",
        showIcon:'true',
        labelStyle:{
            fontSize:15,
            fontWeight:'bold'
        },
        style:{
            backgroundColor:'#075E55'
        },
        indicatorStyle:{
            borderWidth:2,
            borderColor:'white'
        },
        // tabStyle:{
        //   backgroundColor:"#128C7E"
        // }
    }}>
      <Tab.Screen name="chat" component={Chat} />
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  );
}

export default MyTabs;