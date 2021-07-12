import React from 'react';
import {ArrowBackIcon,NativeBaseProvider,} from 'native-base';
import {Text,Image,View} from 'react-native';

const Header = (props) =>{
    return (
        <NativeBaseProvider>
            <View style={{alignItems: 'center',justifyContent:'space-evenly',flexDirection:'row-reverse',height:50,}}>
                <Image style={{height:30,width:30,tintColor:'white'}} source={{uri:"https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png"}}/>
             <ArrowBackIcon color="white" onPress={props.onPress}/>
             </View>
        </NativeBaseProvider>
    )
}

export default Header;