import React, { Component } from 'react'
import { Text, View,FlatList,StyleSheet ,Image, TouchableOpacity} from 'react-native'
import { Avatar,HStack, Center, NativeBaseProvider, theme } from 'native-base';
import {connect} from 'react-redux';
import actions from '../redux/actions';

 class Chat extends Component {
    constructor(props){
        super(props);
        this.state={
            array:[
                {
                  id: "1",
                  title: "Paramveer sir",
                  msg:"kal bank chalte ha OK",
                  date:"2/07/2021",
                  count:0,
                  image:"https://tse2.mm.bing.net/th?id=OIP.xH75Uc5Kge7uGadCa5EEIQHaHa&pid=Api&P=0&w=300&h=300",
                },
                {
                  id: "2",
                  title: "Rahul clg",
                  msg:"Kya haal ha exam kaisa",
                  count:0,
                  date:"1/06/2021",
                  image:"https://tse2.mm.bing.net/th?id=OIP.aklZ0iWGHmSVx-Dwaaq8mwHaGq&pid=Api&P=0&w=185&h=167",
                },
                {
                  id: "3",
                  title: "Mummy",
                  msg:'Hey mummy kaise ho',
                  count:0,
                  date:'22/06/2021',
                  image:"https://tse2.mm.bing.net/th?id=OIP.3X3Z3cdk-pxlcJXD59awxgHaKw&pid=Api&P=0&w=300&h=300",
                },
                {
                    id: "4",
                    title: "Clg Frnd" ,
                    msg:'yaad ha ya bhul gya?',
                    date:'22/03/2021',
                    count:0,
                    image:"https://tse2.mm.bing.net/th?id=OIP.ZQBhBgvcmaKGsLayaMEWUAHaLH&pid=Api&P=0&w=300&h=300",
                  },
                  {
                    id: "5",
                    title:"padosi",
                    msg:'kal kiraya de denge oKK!',
                    count:0,
                    date:'3/08/2021',
                    image:"https://tse2.mm.bing.net/th?id=OIP.WkF6tYIxpk53fx3XcB5uDgHaJT&pid=Api&P=0&w=300&h=300",
                  },
                  {
                    id: "6",
                    title: "Dostni ",
                    msg:'Kal milte hai document dege ',
                    count:0,
                    date:'22/05/2021',
                    image:"https://tse1.explicit.bing.net/th?id=OIP.vYcTyBbhQhL2pxJPQKzV6wHaH6&pid=Api&P=0&w=300&h=300",
                  },
                  {
                    id: "7",
                    title: "papa ",
                    msg:'Namaste Papajji ',
                    date:'22/03/2020',
                    count:0,
                    image:"https://images.statusfacebook.com/profile_pictures/creative/creative-whatsapp-dp-90.jpg",
                  },
                  {
                    id: "8",
                    title: "Hr",
                    msg:'Bhej denge photo ',
                    count:0,
                    date:'22/07/2021',
                    image:"https://tse3.mm.bing.net/th?id=OIP.pma5J_51KNj-80WKylhYyAHaHa&pid=Api&P=0&w=300&h=300",
                  },
                  {
                    id: "9",
                    title: "Sis ",
                    msg:'Ka haal chal ba ',
                    date:'2/03/2021',
                    count:0,
                    image:"https://tse3.mm.bing.net/th?id=OIP.kBG0Q2JPw-TYbxZ9RxrQNgHaJ8&pid=Api&P=0&w=300&h=300",
                    msgHistory:[{type:'send'}]
                  },
              ],
              flag:true
        }
    }

    passData = (index,obj) => {
        const index1 = index
        const idR = obj.id
        console.log(idR,'idR in pass data from chat screen')
        actions.chatData(idR)
        const img = obj.image
        
        const title = obj.title
        
      
        this.props.navigation.navigate('msg',{idR,img,title, index1})
    }

    renderItem = ({item,index}) => {
    
        
        return (
            <>
            <TouchableOpacity onPress={()=> this.passData(index,{id:item.id,image:item.image,title:item.title})}>
                <NativeBaseProvider>
                    <View style={styles.viewContainer}>
                        <Avatar style={{marginTop:15}} source={{uri:item.image}}/>
                        <Text style={styles.textStyle}>{item.title}</Text>
                       </View>
                       <View style={styles.images}>
                           <Image style={{height:15,width:15,paddingBottom:9}} source={{uri:"data:image/png;base64,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"}}/>
                           <Text style={[styles.msg,{marginHorizontal:4,paddingBottom:9}]}>{item.msg}</Text>
                    </View>
                       <View style={{alignSelf:'flex-end'}}>
                       <Text style={styles.date}>{item.date}</Text>
                       
                       </View>
                       
                       {item.count > 0 ? <View style={{position:'absolute',right:0,margin:48,marginBottom:10,marginLeft:3,backgroundColor:'green',paddingHorizontal:5,borderRadius:10}}>
                       <Text style={{fontSize:18,color:'white'}}>{item.count}</Text>
                       
                       </View> : null}
            </NativeBaseProvider>
            </TouchableOpacity>
            
            </>
        )
    }

   
    counter = (msgArray) => {
        var cont=0;
        console.log(msgArray,'mssgArray in coutner')
        for(var i=0;i<msgArray.length;i++){
            console.log(msgArray[i].count)
             cont += msgArray[i].count
        }
        console.log(cont,'cont lets seeee')
    }
    

    render() {
        // const {theme} = this.props;
        
        // console.log(this.props.msgArray[0]?.chatMsg[0].time,'xyz')
        const {array,flag} = this.state;
        const {msgArray,flagR} = this.props
        console.log(msgArray,'adfter updating array state count msgArray ')
        console.log(msgArray[0].chatMsg[0],'message array after update')
        const updatedMsgArray = msgArray

        console.log(flagR,'falgR from redux')
        return (
            <View>
                {/* {this.counter(msgArray)} */}
                {/* <Text style={{fontSize:20,alignSelf:'center'}}>{counter}</Text> */}
                <TouchableOpacity style={[styles.icon,{margin:22}]} onPress={()=>this.props.navigation.navigate('Contacts')}>
                <Image style={styles.icon} source={require('../assets/icon.png')}/>
                </TouchableOpacity>
                {flagR ? 
              <FlatList
              data={msgArray}
              keyExtractor={(item)=>item.id}
              renderItem={this.renderItem}
              />:    
              <FlatList
            data={array}
            keyExtractor={(item)=>item.id}
            renderItem={this.renderItem}
            />
            }
            
            </View>
        )
    }
}

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
    },
    view2Container:{
        marginTop:10,
        flexDirection:'column'
    },
    msg:{
        fontSize:15,
        color:'grey',
        // marginBottom:10
    },
    date:{
        marginTop:-50,
        fontSize:12,
        paddingHorizontal:10
    },
    icon:{
        height:60,
        width:60,
        borderRadius:20,
        right:0,
        position: 'absolute',
        bottom:0,
        zIndex:1,
        // marginBottom:20,
        // marginRight:20
    }
})

const mapStateToProps = (state) => {
    return {
        msgArray:state.msgReducer.contactArr,
        flagR:state.msgReducer.flag
    }
}

export default connect(mapStateToProps)(Chat);