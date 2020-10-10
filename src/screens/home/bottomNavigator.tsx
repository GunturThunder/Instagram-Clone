import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { homeScreen } from './home'
import { comingSoon } from '../empty/comingSoon'
import Icon from 'react-native-vector-icons/Ionicons'
import { Image, View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
export const bottmNavigator = (): React.ReactElement => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#000',
            }}>
            <Tab.Screen
                name="Home"
                component={homeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={comingSoon}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-search-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Upload"
                component={comingSoon}
                options={{
                    tabBarLabel: 'Upload',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="add" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={comingSoon}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={comingSoon}
                options={{
                    tabBarLabel: 'Profile',
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
