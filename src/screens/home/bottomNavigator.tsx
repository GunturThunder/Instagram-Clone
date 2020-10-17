import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { homeScreen } from './home';
import { comingSoon } from '../empty/comingSoon';
import { explore } from '../explore/explore';
import { activity } from '../activity/activity';
import { userDetail } from '../user/userDetail';

const Tab = createBottomTabNavigator();
export const bottmNavigator = (): React.ReactElement => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#000',
                showLabel:false,
            }}>
            <Tab.Screen
                name="Home"
                component={homeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={explore}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Upload"
                component={comingSoon}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{borderWidth:1,borderColor:color,borderRadius:5}}>
                            <Icon name="add" color={color} size={20} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={activity}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={userDetail}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image style={styles.followersImage} source={require('../../assets/images/ibrahimovic.jpg')} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    followersImage: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
    },
})
