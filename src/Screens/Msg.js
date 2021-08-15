import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, Permissions, FlatList, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import { ArrowBackIcon, Icon, Box, Center, NativeBaseProvider, Input } from 'native-base';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import EmojiSelector from 'react-native-emoji-selector'
// import {EmojiPicker} from 'react-native-emoji-picker'


const { width, height } = Dimensions.get('screen')


class Msg extends Component {
    constructor(props) {
        super(props);
        this.myTextInput = React.createRef()
        this.state = {
            input: '',
            isTyping: false,
            user: {},
            num: 0,
            newmsg: '',
            msg: [],
            foto: '',
            photoFlag: false,
            longPress: false,
            msgState: '',
            newmsg: []
        }
    }


    textChange = (txt) => {
        this.setState({ input: txt })
        this.setState({ isTyping: true })
        if (txt.length == 0) {
            this.setState({ isTyping: false })
        }
    }

    submit = (txt) => {
        actions.inputMsg(txt)
        this.myTextInput.current.clear();
        this.setState({
            photoFlag: false
        })
        // actions.chatArray(txt)

        // this.setState({input:""})
    }

    inputSubmit = (input) => {
        console.log(input, 'input in inputsubmit')

        actions.inputMsg(input)
        this.setState({
            photoFlag: false
        })
    }

    imageSubmit = (source) => {
        console.log(source, 'source in image Submit')
        actions.image(source)
    }


    // componentDidMount(){
    //     console.log(this.props.mseg.length)
    //     for(let i=0;i<this.props.mseg.length;i++){
    //         if(this.props.mseg[i].id == this.props.route.params.id){
    //             this.setState({...this.state,user:this.props.mseg[i]})
    //             console.log(this.props.mseg[i],'lopoop')
    //             break;
    //         }
    //     }
    //     console.log(this.state.user,'lkdjflksdjf')
    // }


    async componentDidMount() {
        // console.log(this.props.mseg[0].chatMsg)
        for (var i = 0; i < this.props.mseg.length; i++) {
            if (this.props.mseg[i].id == this.props.route.params.idR) {
                await this.setState({ ...this.state, user: [this.props.mseg[i]] })

                break;
            }
        }
        console.log(this.state.user, 'user after update')
    }


    renderItem = ({ item, index }) => {
        const { foto, photoFlag } = this.state;
        console.log(photoFlag, 'phtofalg in renderitem')
        const timee = this.state.user[0]?.chatMsg[0].time
        const tick = this.state.user[0]?.chatMsg[0].tick
        console.log(tick, 'tick in renderITem')
        console.log(index, 'idnex in renderITem')
        if (index % 2 === 0) {

            // setTimeout(function(){ alert("got somehting") }, 3000);

            return (
                <TouchableOpacity onPress={() => alert(index)}>
                    <View style={styles.msgView}>

                        {photoFlag ? (
                            <View>
                                <Image style={{ height: 100, width: 100 }} source={{ uri: foto }} />
                                <Text style={styles.msgText}>{item}</Text>
                                <Image style={styles.time} source={{ uri: tick }} />
                            </View>
                        ) :
                            <View>
                                <Text style={styles.msgText}>{item}</Text>
                                <Image style={styles.time} source={{ uri: tick }} />
                            </View>
                        }




                    </View>
                </TouchableOpacity>
            )
        }
        else {
            return (
                <TouchableOpacity onPress={() => alert(index)}>
                    <View style={styles.msgView2}>
                        <Text style={styles.msgText2}>{item}</Text>
                        <Text style={styles.time2}>{timee}</Text>

                    </View>
                </TouchableOpacity>
            )
        }
    }

    render2Item = ({ item, index }) => {
        const { foto, photoFlag, longPress } = this.state;
        console.log(photoFlag, 'photoflagin render2itme')
        const timee = this.state.user[0]?.chatMsg[0].time
        const tick = this.state.user[0]?.chatMsg[0].tick;
        console.log(item, 'item in render2Item')
        // console.log(index, 'index in render2 item')

        if (index % 2 === 0) {
            return (
                <TouchableOpacity onPress={() => alert(index)}>
                    <View style={styles.msgView}>
                        {photoFlag ? (
                            <View>
                                <Image style={{ height: 100, width: 100 }} source={{ uri: foto }} />

                            </View>
                        ) :
                            <View>
                                <Text style={styles.msgText}>{item}</Text>
                                <Image style={styles.time} source={{ uri: tick }} />
                            </View>
                        }


                    </View>
                </TouchableOpacity>
            )
        } else {

            return (
                <TouchableOpacity onLongPress={() => this.onLongPress(item, index)}>
                    {!longPress ? <View style={styles.msgView2}>
                        <Text style={styles.msgText2}>{item}</Text>
                        <Text style={styles.time2}>{timee}</Text>
                    </View> : <View style={styles.msgView2}>
                        <Text style={{ fontSize: 400 }}>{this.state.msgState}</Text>
                        {/* <Text style={styles.time2}>{timee}</Text> */}
                    </View>}

                </TouchableOpacity>
            )
        }
    }
    selectImage = () => {
        const { foto, photoFlag } = this.state
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchCamera(options, res => {
            console.log('Response', res);
            //   const foto = {assets}
            //   const fotoassets = res.assets
            //   console.log(,'fotoin the state')

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res.assets[0].uri;
                // let img = foto.concat(source)
                this.setState({
                    ...this.state, foto: source,
                    photoFlag: !photoFlag
                })
                // console.log(photoFlag, 'photoFlag')
                // this.imageSubmit(source)
            }
        });
    };



    renderFooter = () => {

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <Text>Footer component </Text>
            </View>
        );
    };


    onLongPress = (msgg, index) => {
        const index1 = index
        // const msggg = this.state.user[0]?.chatMsg[0].str
        let { longPress, msgState } = this.state;
        let indxx = msggg.findIndex((el, index) => {
            return (el === msgg && index1 == index)
        })
        console.log(msggg, 'msgg on longPress')
        console.log(indxx, 'arrmsgg in longpress')

        alert(index1)
        if (index1 == indxx) {
            alert(true)
            msgState = null
        } else {
            alert(false)
            console.log(msggg[indxx], 'is updated in longpress')
            this.setState({ msgState: msggg[indxx] })
            console.log(msgState, 'msgState in longpress')
            //   this.setState({longPress:!longPress})
        }

        //   console.log(longPress,'after updtae')
    }


    render() {
        console.log(this.state.photoFlag, 'photoFlag in render')
        console.log(this.state.foto, 'foto after update')
        // console.log(this.state.user[0]?.chatMsg[0].str[0].message.length, 'xyz')
        // const messageLength = this.state.user[0]?.chatMsg[0].str[0].message.length

        const msgg = this.state.user[0]?.chatMsg[0].str


        const type = this.state.user[0]?.chatMsg[0].type;
        const timee = this.state.user[0]?.chatMsg[0].time
        console.log(((undefined || {}).xyz))
        console.log(timee, 'time form redux')
        // const indx = msgg.indexOf('how are you')
        // console.log(msgg,'msgg in render')



        const { isTyping, input, user } = this.state;
        let { msgState } = this.state
        // msgState = msgg
        // console.log(msgState,'msgState in render with data')

        const { mseg, stateFlag } = this.props;
        console.log(stateFlag, 'stateFlag in rendeer of msg')
        // console.log(mseg,'mseg from redu')
        const { img, title, index, id } = this.props.route.params;
        const index1 = index;


        return (


            <View style={{ flex: 1 }}>

                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: 60, backgroundColor: "#075E55" }}>
                    <NativeBaseProvider>
                        <View style={styles.icon}>
                            <ArrowBackIcon color="white" onPress={() => this.props.navigation.goBack()} />
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Details", { image: img, title: title })}>
                                <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: "center", justifyContent: "flex-start" }}>
                                    <Image style={styles.image} source={{ uri: img }} />
                                    <Text style={styles.title}>{title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </NativeBaseProvider>
                    <View style={styles.threeDot}>
                        <Image style={{ height: 30, width: 30, tintColor: 'white' }} source={{ uri: "https://cdn3.iconfinder.com/data/icons/user-interface-1-10/24/icon-ui-1-options-512.png" }} />
                    </View>
                </View>
                <View>

                </View>
                {/* {()=>this.onLongPress(...msgg)} */}
                <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 60 }}>
                    <KeyboardAvoidingView
                        behaviour="padding"
                        keyboardVerticalOffset={30}
                        enabled>

                        <View style={{ justifyContent: 'flex-end', }}>
                            <FlatList
                        data={msgg}
                        // inverted={true}
                        // ListFooterComponent={this.renderFooter}
                        contentContainerStyle={{marginVertical:5 }}
                        
                        renderItem={({ item, index }) => {
                            if (stateFlag === true) {
                                return this.renderItem({ item, index })
                            } else if (stateFlag === false) {
                                return this.render2Item({ item, index })
                            }
                        }}
                    />



                        </View>
                    </KeyboardAvoidingView>
                </View>
                {/* <EmojiSelector onEmojiSelected={this.onEmojiSelected(emoji)} /> */}

                <KeyboardAwareScrollView style={{ position: "absolute", bottom: 0 }}>
                    <NativeBaseProvider>
                        <View style={{ padding: 3, justifyContent: "flex-end" }}>
                            <View style={styles.textContainer}>
                                <Input
                                    InputRightElement={
                                        <Icon
                                            as={<Entypo name="camera" size={25} />}
                                            onPress={this.selectImage}
                                            style={{ marginRight: 10 }}
                                        />
                                    }
                                    InputLeftElement={
                                        <Icon
                                            as={<Entypo name="emoji-happy" size={25} />}
                                            onPress={this.onEmojiSelected}
                                        />
                                    }
                                    ref={this.myTextInput}
                                    w="88%"
                                    style={{ width: '88%' }}
                                    variant="rounded"
                                    placeholder="Type a message"
                                    placeholderTextColor="grey"
                                    onChangeText={(txt) => this.textChange(txt)}
                                    onEndEditing={(t) => this.submit(t.nativeEvent.text, index1)}
                                />

                                {isTyping ?
                                    <View>
                                        <TouchableOpacity onPress={() => this.inputSubmit(input)}>
                                            <Image style={styles.mic} source={{ uri: "https://img.utdstc.com/icon/d7d/823/d7d823bcb11caa46ff46fcf7f41948c00ecc41aaf9be1032e1cf9c219b213fbb:200" }} />
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <Image style={styles.mic} source={{ uri: 'https://image.shutterstock.com/image-vector/whatsapp-send-voice-message-vector-260nw-471545891.jpg' }} />

                                }


                            </View>


                            <Image style={styles.emoji} source={{ uri: "data:image/png;base64,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" }} />
                        </View>
                    </NativeBaseProvider>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 17,
        marginLeft: 10
    },
    msgText: {
        fontSize: 18,

        borderRadius: 20,
        justifyContent: 'flex-start',
        textAlign: 'center',
        alignSelf: 'flex-start',
        color: "black",
        marginLeft: -10,
        // padding: 6

    },
    viewCondition: {
        marginTop: "80%"
    },
    msgText2: {
        fontSize: 18,
        fontWeight: "200",
        borderRadius: 20,
        justifyContent: 'flex-start',
        textAlign: 'center',
        alignSelf: 'flex-start',
        color: "black",
        marginLeft: 10,
        padding: 7,
    },
    textDel: {
        fontSize: 18,
        fontWeight: "200",
        borderRadius: 20,
        justifyContent: 'flex-start',
        textAlign: 'center',
        alignSelf: 'flex-start',
        color: "black",
        marginLeft: 10,
        padding: 7,
        backgroundColor: 'green',

    },
    time2: {
        position: "absolute",
        marginLeft: 140,
        marginTop: 53,
        bottom: 0.6
        // marginLeft:2,
        // marginTop:4
    },
    time: {
        // marginTop:20
        // position: "absolute",
        // right: 0,
        // marginTop: 19,
        marginLeft: 95,
        borderRadius: 20,
        // tintColor:"#E2FEC7",
        height: 10,
        width: 20
    },
    msgView: {
        // justifyContent:"flex-end",
        marginVertical: 4,
        // height:height,
        padding: 30,
        paddingVertical: 15,
        marginLeft: "57%",
        width: '39%',
        borderRadius: 20,
        // flexDirection: "row",
        backgroundColor: '#E2FEC7',
    },
    msgView2: {
        // justifyContent:'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 6,
        marginVertical: 9,
        marginLeft: "2%",
        width: '44%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
        // backgroundColor:'grey',
        // flexDirection: "column",
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    mic: {
        height: 44,
        width: 44,
        borderRadius: 20,
        padding: 4,
    },
    camera: {
        // zIndex:1,
        height: 25,
        width: 25,
        position: 'absolute',
        right: 0,
        bottom: 17,
        marginRight: 65,
    },
    emoji: {
        height: 25,
        width: 25,
        bottom: 15,
        position: 'absolute',
        right: 0,
        borderRadius: 20,
        marginRight: 113,
        // justifyContent:'flex-end'
        paddingVertical: 10,
    },
    icon: {
        alignItems: "center",
        justifyContent: 'flex-start',
        flexDirection: "row",
        flex: 1
    },
    threeDot: {
        alignSelf: 'flex-end',
        paddingVertical: 13
    },
    image: {
        height: 35,
        width: 35,
        borderRadius: 15,
        marginLeft: 30
    }
})

const mapStateToProps = (state) => {
    return {
        mseg: state.msgReducer.contactArr,
        stateFlag: state.msgReducer.StateFlag
    }
}

export default connect(mapStateToProps)(Msg);