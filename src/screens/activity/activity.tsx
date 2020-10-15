import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image,ScrollView } from 'react-native'
import { and } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

export const activity = (): React.ReactElement => {
    const [data, setDta] = useState<any>(['zlatan09', 'ggthunder', 'mungkung', 'demi', 'kaesa', 'kucinglucu','fiki','vlada','nokimeca'])
    return (
        <SafeAreaView style={styles.wrap}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Activity</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.activityContainer}>
                    {data.map((item:string, index:number) => {
                        return (
                            <View key={index} style={styles.activityCard}>
                                <View style={styles.somebodyPhoAndName}>
                                    <Image style={styles.followersImage} source={require('../../assets/images/ibrahimovic.jpg')} />
                                    <View style={{ marginHorizontal: 10, flexDirection: 'row' }}>
                                        <Text style={{ fontWeight: 'bold', color: '#000' }}>{item}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: '#000' }}> liked your photo.</Text>
                                            <Text style={{ color: '#898989' }}> 5h</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.likedPhoto}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode="cover" source={require('../../assets/images/messie.jpg')} />
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    container: {
        flex: 1
    },
    header: {
        padding: 14,
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
    activityContainer: {
        marginHorizontal: 15
    },
    activityCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    somebodyPhoAndName: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    followersImage: {
        height: 65,
        width: 65,
        borderRadius: 65 / 2,
    },
    likedPhoto: {
        flex: 1,
        height: 65,
        width: 65
    }
})