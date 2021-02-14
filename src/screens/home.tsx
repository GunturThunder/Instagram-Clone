import React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CameraScreen } from './camera';
import { ChatsScreen } from './chats';
import { StatusScreen } from './status';
import { CallsScreen } from './calls';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const Home = (): React.ReactElement => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#075E54' }}>
            <View style={styles.header}>
                <Text style={{ color: '#FFF', fontSize: 24, fontWeight: 'bold' }}>WhatsApp</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Icon size={24} name="search" color="#FFF" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon style={{ marginLeft: 10 }} size={24} name="ellipsis-vertical" color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 12, color: '#FFF' },
                    indicatorStyle: { backgroundColor: '#FFF', height: 3 },
                    style: { backgroundColor: '#075E54' },
                    showIcon: true,
                }}
                lazy={true}
                initialRouteName="Chats"
            >
                <Tab.Screen name="Camera" component={CameraScreen}
                    options={{
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    name='camera'
                                    color='#85ADA8'
                                    size={24}
                                />
                            </View>
                        )
                    }} />
                <Tab.Screen name="Chats" component={ChatsScreen} />
                <Tab.Screen name="Status" component={StatusScreen} />
                <Tab.Screen name="Calls" component={CallsScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingVertical: 5
    }
})