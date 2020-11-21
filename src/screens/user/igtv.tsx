import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'

export const igtv = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.igtvWrap}>
                <View style={styles.igtvPost}>
                    <Image style={{ height: '100%', width: '100%', borderRadius: 20 }} resizeMode="cover" source={require('../../assets/images/kucing.jpg')} />
                </View>
                <View style={styles.igtvAbsolute}>
                    <View style={styles.igtvTextContainer}>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: '#FFF' }}>Video Kucing Lucu</Text>
                            <Text style={{ color: '#FFF', fontSize: 12, marginTop: 3 }}>2,371 views</Text>

                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    igtvWrap: {
        marginHorizontal: 15
    },
    igtvPost: {
        width: '50%',
        height: '50%',
        marginTop: 10
    },
    igtvAbsolute: {
        position: 'absolute',
        width: '50%',
        height: '50%',
        marginTop: 10,
        justifyContent: 'flex-end'
    },
    igtvTextContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: '20%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    }
})