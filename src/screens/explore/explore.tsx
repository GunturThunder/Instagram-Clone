import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const explore = (): React.ReactElement => {
    const [data, setData] = useState<any>(['data1', 'data2', 'data3', 'data4'])
    return (
        <SafeAreaView style={styles.wrap}>
            <View style={styles.header}>
                <View style={styles.cameraInsta}>
                    <TextInput placeholder="Search" style={styles.tISearch} />
                </View>
                <TouchableOpacity>
                    <Icon size={28} name="scan" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.wrapFiltered}>
                    <View style={{ marginHorizontal: 10 }}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true} style={styles.storyContainer}
                        >
                            <TouchableOpacity>
                                <View style={styles.filteredPart}>
                                    <Text style={styles.textFiltered}>IGTV</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.filteredPart}>
                                    <Text style={styles.textFiltered}>Shop</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.filteredPart}>
                                    <Text style={styles.textFiltered}>Travel</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.filteredPart}>
                                    <Text style={styles.textFiltered}>Game</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.filteredPart}>
                                    <Text style={styles.textFiltered}>Beaulty</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
                <ScrollView>
                    {data.map((item: string, index: number) => {
                        return (
                            <View key={index}>
                                <View style={styles.eachLinePart}>
                                    {index % 2 === 0 ? (
                                        <>
                                            <View style={styles.smallPart}>
                                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.bigPart}>
                                                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF' }}>
                                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/ibrahimovic.jpg')} />
                                                </TouchableOpacity>
                                            </View>
                                        </>
                                    ) : (
                                            <>
                                                <View style={styles.bigPart}>
                                                    <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFF' }}>
                                                        <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/ibrahimovic.jpg')} />
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
                                            </>
                                        )}
                                </View>
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
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:10,
        justifyContent:'space-between'
    },
    cameraInsta: {
        width: '85%',
        borderRadius:10,
        backgroundColor:'#EBEBEB',
        marginVertical:10
    },
    textInsta: {
        color: '#000',
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    wrapFiltered: {
        justifyContent: 'center',
        paddingBottom: 10
    },
    storyContainer: {
        marginTop: 10
    },
    filteredPart: {
        marginRight: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textFiltered: {
        color: '#000',
        marginLeft: 5,
        fontSize: 14,
    },
    wrapExplore: {
        flex: 1,
    },
    eachLinePart: {
        height: Dimensions.get('window').height / 2.7,
        flexDirection: 'row'
    },
    smallPart: {
        flex: 1,
    },
    bigPart: {
        flex: 2,
    },
    textInputSearch:{
        width: '85%',
        marginLeft: 10,
        borderRadius:10,
        backgroundColor:'#EBEBEB'
    },
    tISearch:{
        paddingLeft:20,
        paddingVertical:'3%'
    }
})