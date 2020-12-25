import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const storyScreen = (props: any): React.ReactElement => {
    const { initialMinute = 0, initialSeconds = 0 } = props;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [persent, setPersent] = useState<number>(0)
    const backButton = () => {
        // setCounter(0),
        props.navigation.goBack()
        // clearInterval(timeCounter)
    }
    useEffect(() => {
        let myInterval = setInterval(() => {
            // console.log('sec',seconds)
            if (seconds >= 15) {
                setSeconds(0);
                setPersent(0)
            }
            else {
                setSeconds(seconds + 1);
                setPersent(persent + 6.66666666667)
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });
    return (
        <SafeAreaView style={styles.wrap}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null || undefined}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}
                style={styles.wrap}>
                <Image style={{ position: 'absolute' }} source={require('../../assets/images/ibrahimovic.jpg')} />
                <View style={styles.container}>
                    <View style={{ backgroundColor: '#959595', width: '100%' }}>
                        <View style={{
                            backgroundColor: '#F7F7F7', 
                            height: 3, 
                            borderRadius: 5,
                            width: `${persent}%`,
                        }}>
                        </View>
                    </View>
                    <View style={styles.vUserPartContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.images} source={require('../../assets/images/ibrahimovic.jpg')} />
                            <Text style={styles.textName}>{props.route.params.item}</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Icon size={20} color="#FFF" name="ellipsis-horizontal" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 5 }} onPress={backButton}>
                                <Icon size={40} color="#FFF" name="close-outline" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={styles.vSendContainer}>
                        <View style={styles.textInput}>
                            <TextInput placeholderTextColor="#FFF" style={styles.textInputText} placeholder="Send message" />
                        </View>
                        <TouchableOpacity style={{ marginRight: 5 }}>
                            <Icon size={30} name="ios-paper-plane-outline" color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#000'
    },
    container: {
        flex: 1,
        marginVertical: '2%',
        marginHorizontal: 10,
    },
    // timeCounterView: {
    //     backgroundColor: '#F7F7F7',
    //     height: 3,
    //     borderRadius: 5,
    //     width: '80%'
    // },
    vUserPartContainer: {
        marginTop: 10,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    images: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
    },
    textName: {
        color: "#FFF",
        marginLeft: 10,
        fontWeight: 'bold'
    },
    vSendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        // backgroundColor: '#E7E7E7',
        borderWidth: 1,
        borderColor: '#CBCBCB',
        paddingHorizontal: 15,
        borderRadius: 28,
        width: '85%'
    },
    textInputText: {
        paddingVertical: '5%',
        color: "#FFF"
    }
})