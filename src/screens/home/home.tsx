import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const homeScreen = (props: any): React.ReactElement => {
    return (
        <SafeAreaView style={styles.wrap}>
            <View style={styles.header}>
                <View style={styles.cameraInsta}>
                    <TouchableOpacity>
                        <Icon size={30} name="md-camera-outline" />
                    </TouchableOpacity>
                    <Text style={styles.textInsta}>Instagram</Text>
                </View>
                <TouchableOpacity style={{ marginRight: 10 }}>
                    <Icon size={30} name="paper-plane-outline" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor:'#FFF'
    },
    header: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    cameraInsta: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    textInsta: {
        color: '#000',
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold'
    }
})