import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Avatar, NativeBaseProvider, theme } from 'native-base';
import { connect } from 'react-redux';
import actions from '../redux/actions'

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:[{
                id:"1",
                image:"https://tse2.mm.bing.net/th?id=OIP.xH75Uc5Kge7uGadCa5EEIQHaHa&pid=Api&P=0&w=300&h=300",
                title:'Paramveer sir',
                msg:'Hey there! I am using WhatsApp',
                count:0
            },{
                id:'2',
                image:"https://tse2.mm.bing.net/th?id=OIP.xH75Uc5Kge7uGadCa5EEIQHaHa&pid=Api&P=0&w=300&h=300",
                title:"Rahul Clg",
                msg:"Available",
                count:0
            },{
                id:"3",
                image:"https://tse2.mm.bing.net/th?id=OIP.xH75Uc5Kge7uGadCa5EEIQHaHa&pid=Api&P=0&w=300&h=300",
                title:"Mummy",
                msg:"Do not disturb",
                count:0
            },{
                id:'4',
                image:"https://tse2.mm.bing.net/th?id=OIP.xH75Uc5Kge7uGadCa5EEIQHaHa&pid=Api&P=0&w=300&h=300",
                title:"Clg Friend",
                msg:"Available",
                count:0
            },{
                id:'5',
                image:"https://tse2.mm.bing.net/th?id=OIP.xH75Uc5Kge7uGadCa5EEIQHaHa&pid=Api&P=0&w=300&h=300",
                title:'Padosi',
                msg:"No calls",
                count:0
            },{
                id:"6",
                image:"https://tse2.mm.bing.net/th?id=OIP.xH75Uc5Kge7uGadCa5EEIQHaHa&pid=Api&P=0&w=300&h=300",
                title:'MoM',
                msg:"Busy",
                count:0
            }]
        }
    }


    nextScreen = (index,objj) => {
        const index1 = index
        // console.log(index1,'index in nextscreen')
        console.log(objj,'objj in next screen')
        const {arr}= this.state;
        let idR = objj.id;


        actions.chatData(idR)
        
        const img = objj.image;
        const title = objj.title
        
        this.props.navigation.navigate('msg',{idR,img,title,index})
    }

    renderItem = ({item,index}) => {
        return (
            <>
            <TouchableOpacity onPress={()=>this.nextScreen(index,{id:item.id,image:item.image,title:item.title})}>
                <NativeBaseProvider>
                    <View style={styles.viewContainer}>
                        <Avatar style={{marginTop:15}} source={{uri:item.image}}/>
                        <Text style={[styles.textStyle,{color:theme.colors.text}]}>{item.title}</Text>
                       </View>
                       <View style={styles.images}>
                           <Text style={[styles.msg,{paddingBottom:9}]}>{item.msg}</Text>
                    </View>
            </NativeBaseProvider>
            </TouchableOpacity>
            
            </>
        )
    }



    render() {
        const {mseg} = this.props;
        // const {theme} = this.props
        console.log(mseg,'msg recived from redux')
        return (
            <View style={{flex:1,backgroundColor:'#ffffff'}}>
            <FlatList
            data={this.state.arr}
            keyExtractor={(item)=> item.id}
            renderItem={this.renderItem}
            />
            </View>
        )
    }
}


// export default function(props){
//     const theme = useTheme()
//     return (
//         <Contacts {...props} theme={theme}/>
//     )
// }


const styles = StyleSheet.create({
    viewContainer:{
        alignItems: 'center',
        marginLeft:10,
        justifyContent:"flex-start",
        flexDirection:'row',
       
    },
    images:{
        alignItems: 'center',
        justifyContent:'flex-start',
        flexDirection:'row',
        marginLeft:80,
        marginTop:-10,
        borderBottomWidth:0.1,
        borderBottomColor:"grey"
    },
    textStyle:{
        fontWeight:'bold',
        marginLeft:15,
        fontSize:18,
        color:theme.colors.text
       
    },
    msg:{
        fontSize:15,
        color:'grey',
        // marginBottom:10
    },
})


const mapStateToProps = (state) => {
    return {
        mseg:state.msgReducer.contactArr
    }
}

export default connect(mapStateToProps)(Contacts);