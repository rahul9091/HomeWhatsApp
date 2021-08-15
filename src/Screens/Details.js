//import liraries
import React, { useRef } from 'react';
import { Platform, Image, View, Text, Switch, StyleSheet, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';

const { width } = Dimensions.get('screen')
const { height } = Dimensions.get('screen')

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 350;



const Details = (props) => {
    console.log(props)
    const { image, title } = props.route.params;
    const navTitleView = useRef(null);
    console.log(title)
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style={{height:3}} barStyle="light-content" backgroundColor="#73BEB7" />
            <ImageHeaderScrollView
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                minOverlayOpacity={0.3}
                maxOverlayOpacity={0.6}
                renderHeader={() => {
                    return <Image style={styles.image} source={{ uri: image }} />
                }}
                renderForeground={() => {
                    return (
                        <View>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    )
                }}
                renderFixedForeground={() => (
                    <Animatable.View ref={navTitleView}>
                        <Text style={styles.title}>{title}</Text>
                    </Animatable.View>
                )}
            >
                <TriggeringView
                    onHide={()=>navTitleView.current.fadeInUp(200)}
                    onDisplay={()=>navTitleView.current.fadeOut(100)}
                >

                    {/* <ScrollView> */}
                    <View style={{ height: 700 }}>
                        <TriggeringView onHide={() => console.log("text hidden")}>
                            <View style={{ backgroundColor: "#F4F4F4", paddingTop: 8 }}>
                                {/* <Text style={{fontSize:24,fontWeight:'bold',color:'red',position: 'absolute',marginTop:-20,zIndex:1,opacity:1}}>{title}</Text> */}
                            </View>

                            <View style={styles.view1}>
                                <Text style={styles.notifications}>Mute Notifications</Text>
                                <Switch />

                            </View>
                            <View style={styles.view1}>
                                <Text style={styles.notifications}>Custom Notifications</Text>
                            </View>
                            <View style={styles.viewLast}>
                                <Text style={styles.notifications}>Media Visibility</Text>
                            </View>
                            <View style={{ backgroundColor: "#F4F4F4", paddingTop: 17 }}>

                            </View>
                            <View>
                                <View style={styles.view1}>
                                    <Text style={styles.notifications}>Disappearing messages</Text>
                                </View>
                                <View style={[styles.viewLast, { flexDirection: 'column', alignItems: "flex-start" }]}>
                                    <Text style={styles.notifications}>Encryption</Text>
                                    <Text>Messages and calls are end-to-end encrypted.Tap to verify</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: "#F4F4F4", paddingTop: 17, }}>

                            </View>
                            <View style={[styles.view1, { flexDirection: "column", alignItems: 'flex-start', }]}>
                                <Text style={styles.greenText}>About and phone number</Text>
                                {/* <View style={[styles.view1,{flexDirection:'column'}]}> */}
                                <Text style={[styles.notifications, { marginTop: 7 }]}>Hey there! I am using WhatsApp</Text>
                            </View>

                        </TriggeringView>
                    </View>
                    {/* </ScrollView> */}
                </TriggeringView>

            </ImageHeaderScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    title: {
        // backgroundColor: '#000',
        opacity: 0.4,
        color: "white",
        fontSize: 34,
        position: 'absolute',
        marginTop: 290,
        left:20,
        fontWeight: 'bold'
    },
    greenText: {
        color: "#73BEB7",
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 5
    },
    image: {
        height: height / 2,
        width: width,
        // opacity:1,
        alignSelf: 'stretch',
        resizeMode: "cover"
    },
    notifications: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        // elevation: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.1,
        borderBottomLeftRadius: 15
    },
    viewLast: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    }
});

//make this component available to the app
export default Details;
