import React from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


export const CameraScreen = (): React.ReactElement => {
    return (
        <SafeAreaView>
            <Text>Camera</Text>
            <Icon
                name='camera'
                color='#85ADA8'
                size={24}
            />
        </SafeAreaView>
    )
}