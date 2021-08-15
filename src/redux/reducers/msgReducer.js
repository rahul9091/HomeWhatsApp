import ActionTypes from '../types';

const hours =new Date().getHours()
const min=new Date().getMinutes()
const year = new Date().getFullYear()
const month = new Date().getMonth()+1
// const day = new Date.getDate()
var typeFlag = false

const initialState={
  contactArr:[
    {
      id: "1",
      title: "Paramveer sir ",
      msg:"kal bank chalte ha OK",
      date:`0${month}/${year}`,
      count:0,
      chatMsg:[{id:'1',str:[],tick:"https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png",date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
      image:"https://tse2.mm.bing.net/th?id=OIP.xH75Uc5Kge7uGadCa5EEIQHaHa&pid=Api&P=0&w=300&h=300",
    },
    {
      id: "2",
      title: "Rahul clg",
      msg:"Kya haal ha exam kaisa",
      count:0,
      date:`0${month}/${year}`,
      chatMsg:[{id:'2',str:['Hello Friend','how are you'],tick:'https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png',date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
      image:"https://tse2.mm.bing.net/th?id=OIP.aklZ0iWGHmSVx-Dwaaq8mwHaGq&pid=Api&P=0&w=185&h=167",
    },
    {
      id: "3",
      title: "Mummy",
      msg:'Hey mummy kaise ho',
      count:0,
      date:`0${month}/${year}`,
      chatMsg:[{id:"3",str:[],tick:'https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png',date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
      image:"https://tse2.mm.bing.net/th?id=OIP.3X3Z3cdk-pxlcJXD59awxgHaKw&pid=Api&P=0&w=300&h=300",
    },
    {
        id: "4",
        title: "Clg Frnd" ,
        msg:'yaad ha ya bhul gya?',
        date:`0${month}/${year}`,
        count:0,
        chatMsg:[{id:"4",str:[],tick:'https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png',date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
        image:"https://tse2.mm.bing.net/th?id=OIP.ZQBhBgvcmaKGsLayaMEWUAHaLH&pid=Api&P=0&w=300&h=300",
      },
      {
        id: "5",
        title:"padosi",
        msg:'kal kiraya de denge oKK!',
        count:0,
        chatMsg:[{id:"5",str:[],tick:'https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png',date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
        date:`0${month}/${year}`,
        image:"https://tse2.mm.bing.net/th?id=OIP.WkF6tYIxpk53fx3XcB5uDgHaJT&pid=Api&P=0&w=300&h=300",
      },
      {
        id: "6",
        title: "Dostni ",
        msg:'Kal milte hai document dege ',
        count:0,
        chatMsg:[{id:"6",str:[],tick:'https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png',date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
        date:`0${month}/${year}`,
        image:"https://tse1.explicit.bing.net/th?id=OIP.vYcTyBbhQhL2pxJPQKzV6wHaH6&pid=Api&P=0&w=300&h=300",
      },
      {
        id: "7",
        title: "papa ",
        msg:'Namaste Papajji ',
        date:`0${month}/${year}`,
        chatMsg:[{id:"7",str:[],tick:'https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png',date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
        count:0,
        image:"https://images.statusfacebook.com/profile_pictures/creative/creative-whatsapp-dp-90.jpg",
      },
      {
        id: "8",
        title: "Hr",
        msg:'Bhej denge photo ',
        count:0,
        chatMsg:[{id:"8",str:[],tick:'https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png',date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
        date:`0${month}/${year}`,
        image:"https://tse3.mm.bing.net/th?id=OIP.pma5J_51KNj-80WKylhYyAHaHa&pid=Api&P=0&w=300&h=300",
      },
      {
        id: "9",
        title: "Sis ",
        msg:'Ka haal chal ba ',
        date:`0${month}/${year}`,
        chatMsg:[{id:"9",str:[],tick:'https://www.pikpng.com/pngl/m/426-4263822_blue-double-ticks-whatsapp-blue-tick-png-clipart.png',date:`0${month}/${year}`,time:`${hours}:${min}`,type:typeFlag ? 'sender' : 'reciever'}],
        count:0,
        image:"https://tse3.mm.bing.net/th?id=OIP.kBG0Q2JPw-TYbxZ9RxrQNgHaJ8&pid=Api&P=0&w=300&h=300",
      },
  ],
  idCh:0,
  flag:false,
  StateFlag:false

}


export default function msgReducer (state=initialState,action){
  switch(action.type){
   case ActionTypes.CHATDATA:
     const idR = action.payload
     state.idCh = idR
     var idHr = state.idCh
     console.log(idHr,'idHr from chat in reducer')

    console.log(state.contactArr.length,'from inittial object')
    return{
      ...state
    }

  case ActionTypes.IMAGE:
    // const source = action.payload;
    // console.log(source ,'source in reducer')

   case ActionTypes.INPUT:
     const input = action.payload;
     console.log(input ,'input got in reducer')
    console.log(state.idCh,'idCh in another actions')

    console.log(typeFlag,'typeFlage changed in reducer then will update')

  
     for(var i=0;i<state.contactArr.length;i++){
      
      if(state.contactArr[i].id == state.idCh){
        state.contactArr[i].chatMsg[0].str.push(input)
        state.contactArr[i].count += 1
        state.flag = true
         //false
         
        if(typeFlag == false){
          // updatedFlag = true
          typeFlag = true;
          // alert(true)

        }else if(typeFlag == true){
          // updatedFlag = false
          typeFlag = false
          // alert(false)
          
        }
        break;
      }else{
        // alert('doesnot match')
        console.log('does not match')
      }
    }

    return {
      ...state,
      contactArr:[...state.contactArr],
      flag:state.flag,
      StateFlag:typeFlag

    }

    default:{
      return {
        ...state
      }
    }
  }
}