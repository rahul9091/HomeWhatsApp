import React ,{useState,Fragment} from 'react';
import {Text,Switch,View,Image,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TopTab from './TopTab'
import Msg from '../Screens/Msg';
import Contacts from '../Screens/Contacts';
import actions from '../redux/actions';

export default function(){
    const Stack = createStackNavigator()
    return (
        <Fragment>
            <Stack.Screen 
            name="WhatsApp"
             component={TopTab}
             options={({navigation})=>({
                 title:"WhatsApp",
                 headerRight:()=>(
                     <View style={{alignItems:"center",justifyContent:"space-evenly",flexDirection:'row-reverse'}}>
                         <TouchableOpacity onPress={()=>alert('dots Pressed')}>
                         <Image style={{height:27,width:27,tintColor:"white"}} source={{uri:'https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png'}}/>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={()=> alert("Search PRessed")}>
                         <Image style={{height:30,width:30,marginTop:4,marginRight:7,tintColor:"white"}} source={{uri:'https://cdn.icon-icons.com/icons2/2566/PNG/512/search_icon_153438.png'}} />
                         </TouchableOpacity>
                         
                     </View>
                 )
             })}
             />
             <Stack.Screen name="msg" component={Msg} options={{headerShown:false}} />
             <Stack.Screen name="Contacts" component={Contacts}/>
        </Fragment>
    )
}