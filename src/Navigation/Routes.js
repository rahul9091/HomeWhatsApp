import React from 'react';
import {NavigationContainer,DefaultTheme,DarkTheme} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './MainStack';
import {connect} from 'react-redux'

function Routes(props){
    const {isDark} = props;
    console.log(isDark,'isDark in routes')
    const Stack= createStackNavigator()


const customDefaultTheme = {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        background:"#ffffff",
        text:'#333333'
    }
}


const customDarkTheme = {
    ...DarkTheme,
    colors:{
        ...DarkTheme.colors,
        background:'#333333',
        text:"#fff"
    }
}

const theme = !isDark ? customDefaultTheme : customDarkTheme

    return (
        <NavigationContainer >
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:'#075E55',
            },
            headerTintColor:'#ffffff',
            headerTitleStyle:{
                fontWeight:"bold"
            }
        }}>
            {MainStack()}
        </Stack.Navigator>
    </NavigationContainer>  
    )
}

const mapStateToProps = (state) => {
    return {
        isDark:state.msgReducer.isDark
    }
}

export default connect(mapStateToProps) (Routes);