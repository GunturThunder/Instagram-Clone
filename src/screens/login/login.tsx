import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,TextInput
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import { Line } from '../../components/line'
import Icon from 'react-native-vector-icons/Ionicons';

export const loginScreen = (props: any): React.ReactElement => {
    const [isPassworsShow, setIsPasswordShow] = useState<boolean>(true)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        if (email !== '' && password !== '') {
            setIsDisabled(false)
        }
        else {
            setIsDisabled(true)
        }
    })

    const hideShowPassword = () => {
        setIsPasswordShow(!isPassworsShow)
    }
    return (
        <SafeAreaView style={styles.wrap}>
            <StatusBar backgroundColor="#DFDFDF" barStyle='dark-content' />
            <TouchableOpacity style={styles.wrapBahasa}>
                <Text>English (United States)</Text>
                <Icon name="chevron-down-outline" />
            </TouchableOpacity>
            <View style={styles.wrapContent}>
                <View style={styles.wrapInstagramWord}>
                    <Image style={styles.instgarmWord} source={require('../../assets/images/instagram-word.png')} />
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.textInput}>
                        <TextInput style={styles.textInputText} onChangeText={setEmail} placeholder="Phone number,email or username" />
                    </View>
                    <View style={styles.textInputPassword}>
                        <TextInput onChangeText={setPassword} style={{ width: '90%',paddingVertical:'4%' }} secureTextEntry={isPassworsShow} placeholder="Password" />
                        <TouchableOpacity onPress={hideShowPassword}>
                            {isPassworsShow === true ? (
                                <Icon size={24} color="#CBCBCB" name="eye-off-outline" />
                            ) : (
                                    <Icon size={24} color="#CBCBCB" name="eye-outline" />
                                )}
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('bottmNavigator')}
                        disabled={isDisabled}
                        style={isDisabled === false ? styles.btnLogin : styles.btnLoginDisabled}>
                        <Text style={styles.textLogin}>Log In</Text>
                    </TouchableOpacity>
                    <View style={styles.forgotPassContainer}>
                        <Text style={{ color: '#A9A9A9' }}>Forgot your login details? </Text>
                        <Text style={styles.textHelp}>Get help logging in.</Text>
                    </View>
                    <View style={styles.orContainer}>
                        <View style={styles.textOrContainer}>
                            <Text style={{ fontWeight: 'bold', color: '#CCCCCC' }}>OR</Text>
                        </View>
                        <View style={styles.lineOrContainer}>
                            <View style={styles.line}></View>
                            <View style={styles.line}></View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnLoginAs}>
                        <Icon size={24} color="#FFF" name="logo-facebook" />
                        <Text style={styles.textLoginAs}>Log In as @guntur_thunder</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }}>

            </View>
            <TouchableOpacity style={styles.footer}>
                <Text style={{ color: '#A5A5A5' }}>Don't have an account? </Text>
                <Text style={{ color: '#000', fontWeight: 'bold' }}>Sign up.</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#F6F6F6'
    },
    wrapBahasa: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    wrapInstagramWord: {
        marginBottom: 25,
        alignItems: 'center'
    },
    instgarmWord: {
        height: 50,
        width: 140
    },
    wrapContent: {
        justifyContent: 'center',
        marginTop: '20%',
    },
    formContainer: {
        marginHorizontal: 25
    },
    textInput: {
        backgroundColor: '#E7E7E7',
        borderWidth: 1,
        borderColor: '#CBCBCB',
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 15
    },
    textInputPassword: {
        backgroundColor: '#E7E7E7',
        borderWidth: 1,
        borderColor: '#CBCBCB',
        paddingHorizontal: 15,
        borderRadius: 5,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnLogin: {
        backgroundColor: '#405de6',
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    btnLoginDisabled: {
        backgroundColor: '#7C90EE',
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    textLogin: {
        color: '#F6F6F6',
        fontWeight: 'bold',
    },
    textLoginAs: {
        color: '#F6F6F6',
        fontWeight: 'bold',
        marginLeft: 5
    },
    forgotPassContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    textHelp: {
        fontWeight: 'bold',
        color: '#000'
    },
    orContainer: {
        marginBottom: 15
    },
    textOrContainer: {
        alignItems: 'center',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        width: '44%',
    },
    lineOrContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -8
    },
    btnLoginAs: {
        backgroundColor: '#405de6',
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    footer: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC'
    },
    textInputText:{
        paddingVertical:'4%'
    }
})