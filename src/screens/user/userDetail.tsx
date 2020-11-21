import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { explore } from '../explore/explore'
import { userPhoto } from './userPhoto'
import { userTag } from './userTag'
import { igtv } from './igtv'

const Tab = createMaterialTopTabNavigator();

export const userDetail = () => {
    return (
        <SafeAreaView style={styles.wrap}>
            <View style={styles.header}>
                <View style={styles.iconLeft}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon size={32} color="#2C2C2C" name="add" />
                        <Text style={styles.textInsta}>Ibrahimovic</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginRight: 10 }}>
                    <Icon size={30} color="#2C2C2C" name="menu-sharp" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <TouchableOpacity style={styles.covidTextContainer}>
                    <View style={styles.redDot} />
                    <Text style={styles.textCovid}>See COVID-19 Business Resources</Text>
                </TouchableOpacity>
                <View style={styles.detailUserPicContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ height: 80, width: 80 }}>
                            <Image style={{ height: '100%', width: '100%', borderRadius: 100 }} resizeMode="cover" source={require('../../assets/images/kucing.jpg')} />
                        </TouchableOpacity>
                        <View style={styles.followersContainer}>
                            <TouchableOpacity style={styles.totalContainer}>
                                <Text style={styles.textTotal}>256</Text>
                                <Text style={styles.text}>Posts</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.totalContainer}>
                                <Text style={styles.textTotal}>4,669</Text>
                                <Text style={styles.text}>Followers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.totalContainer}>
                                <Text style={styles.textTotal}>54</Text>
                                <Text style={styles.text}>Following</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.userNameAndDesc}>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Ibrahimovic</Text>
                    <Text style={{ color: '#a2a2a2' }}>Public figure</Text>
                    <Text style={{ color: '#232323' }}>Bienvenidos a la cuenta oficial de Instagram de Leo Messi / Welcome to the official Leo Messi Instagram account</Text>
                    <TouchableOpacity style={styles.btnEditProfile}>
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>Edit Profile</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{ alignItems: 'center', marginRight: 25 }}>
                            <View style={{ height: 70, width: 70 }}>
                                <TouchableOpacity style={styles.profileStory}>
                                    <Image style={{ height: '100%', width: '100%', borderRadius: 100 }} resizeMode="cover" source={require('../../assets/images/kucing.jpg')} />
                                </TouchableOpacity>
                            </View>
                            <Text>Title</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.addStoryProfile}>
                                <Icon size={32} color="#2C2C2C" name="add" />
                            </TouchableOpacity>
                            <Text>New</Text>
                        </View>
                    </View>
                </View>
                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: '#000',
                        indicatorStyle: { backgroundColor: '#000', borderWidth: 1 },
                        showLabel: false,
                        showIcon: true
                    }}>
                    <Tab.Screen
                        name="photos"
                        component={userPhoto}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon color={color} size={24} name="apps-sharp" />
                            ),
                        }} />
                    <Tab.Screen
                        name="igtv"
                        component={igtv}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon color={color} size={24} name="tv-outline" />
                            ),
                        }} />
                    <Tab.Screen
                        name="tag"
                        component={userTag}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon color={color} size={26} name="md-person-circle-outline" />
                            ),
                        }} />
                </Tab.Navigator>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textInsta: {
        color: '#2C2C2C',
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    covidTextContainer: {
        paddingVertical: '4%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#DADADA',
        borderBottomColor: '#DADADA',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCovid: {
        color: '#38a0e9',
        fontSize: 13,
        fontWeight: 'bold'
    },
    redDot: {
        height: 5,
        borderRadius: 5 / 2,
        width: 5,
        backgroundColor: '#FC4652',
        marginRight: 10
    },
    detailUserPicContainer: {
        marginHorizontal: 20,
        height: Dimensions.get('window').height / 6.75,
        marginVertical: 10,
        justifyContent: 'center',
    },
    followersContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30
    },
    totalContainer: {
        alignItems: 'center'
    },
    textTotal: {
        fontWeight: 'bold',
        marginBottom: 2,
        fontSize: 18,
        color: '#000'
    },
    text: {
        fontSize: 14
    },
    addIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: -2,
        height: 30,
        width: 30,
        backgroundColor: '#3796F2',
        borderRadius: 30 / 2,
        right: -5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#FFF'
    },
    userNameAndDesc: {
        marginHorizontal: 15
    },
    btnEditProfile: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#DADADA',
        borderRadius: 5,
        paddingVertical: 8,
        alignItems: 'center'
    },
    profileStory: {
        borderWidth: 1,
        borderColor: '#DADADA',
        padding: 2,
        borderRadius: 70 / 2
    },
    addStoryProfile: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 60 / 2,
    }
})