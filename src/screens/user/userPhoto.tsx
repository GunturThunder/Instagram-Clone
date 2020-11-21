import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'

export const userPhoto = () => {
    const [data, setData] = useState<any>(['data1', 'data2', 'data3', 'data4'])
    return (
        <SafeAreaView style={{ flex: 1}}>
            {data.map((item: string, index: number) => {
                return (
                    <View key={index}>
                        <View style={styles.eachLinePart}>
                            <View style={styles.smallPart}>
                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.smallPart}>
                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.smallPart}>
                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )
            })}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    eachLinePart: {
        height: Dimensions.get('window').height / 2.7,
        flexDirection: 'row'
    },
    smallPart: {
        flex: 1,
    },
})