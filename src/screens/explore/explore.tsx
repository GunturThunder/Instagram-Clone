import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export const explore = (): React.ReactElement => {
    const [data, setData] = useState<any>(['data1', 'data2', 'data3', 'data4'])
    const [filter, setFilter] = useState<any>(['IGTV', 'Shop', 'Travel', 'Game', 'Beauty'])
    const [isModalShow, setIsModalShow] = useState<boolean>(false)
    // const [imageSmall,setImageSmall] = useState<any>(['../../assets/images/kucing.jpg','../../assets/images/kucing.jpg','../../assets/images/kucing.jpg','../../assets/images/kucing.jpg','../../assets/images/kucing.jpg','../../assets/images/kucing.jpg'])
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
                            {filter.map((item: any, index: number) => {
                                return (
                                    <TouchableOpacity key={index}>
                                        <View style={styles.filteredPart}>
                                            <Text style={styles.textFiltered}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
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
                                                <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                                </TouchableOpacity>
                                                <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.bigPart}>
                                                <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF' }}>
                                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/ibrahimovic.jpg')} />
                                                </TouchableOpacity>
                                            </View>
                                        </>
                                    ) : (
                                            <>
                                                <View style={styles.bigPart}>
                                                    <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF' }}>
                                                        <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/ibrahimovic.jpg')} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.smallPart}>
                                                    <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                                        <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                                        <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                                    </TouchableOpacity>
                                                </View>
                                            </>
                                        )}
                                </View>
                                <View style={styles.eachLinePart}>
                                    <View style={styles.smallPart}>
                                        <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                            <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                            <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.smallPart}>
                                        <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                            <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                            <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.smallPart}>
                                        <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                            <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onLongPress={() => setIsModalShow(true)} style={{ borderWidth: 1, borderColor: '#FFF', flex: 1 }}>
                                            <Image style={{ width: '100%', height: '100%' }} resizeMode='cover' source={require('../../assets/images/kucing.jpg')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <Modal
                visible={isModalShow}
                transparent={true}
                animationType="fade">
                <SafeAreaView style={styles.wrapModalCon}>
                    <View style={styles.wrapModal}>
                        <View style={styles.postHeader}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View>
                                    <Image style={styles.followersImage} source={require('../../assets/images/ibrahimovic.jpg')} />
                                </View>
                                <Text style={styles.textFollowersPost}>ibrahimovic</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setIsModalShow(false)} style={{ backgroundColor: 'red', borderRadius: 7 }}>
                                <Icon size={26} color="#FFF" name="ios-close" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 300 }}>
                            <Image style={{ height: '100%', width: '100%' }} resizeMode='contain' source={require('../../assets/images/post1.jpg')} />
                        </View>
                        <View style={styles.modalContainer}>
                            <TouchableOpacity>
                                <Icon size={30} color="#000" name="heart-outline" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon size={30} color="#000" name="md-person-circle-outline" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon size={26} color="#000" name="ios-paper-plane-outline" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon size={26} color="#000" name="ellipsis-vertical-sharp" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
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
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    cameraInsta: {
        width: '85%',
        borderRadius: 10,
        backgroundColor: '#EBEBEB',
        marginVertical: 10
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
    textInputSearch: {
        width: '85%',
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: '#EBEBEB'
    },
    tISearch: {
        paddingLeft: 20,
        paddingVertical: '3%'
    },
    wrapModalCon: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    wrapModal: {
        // flex: 1,
        backgroundColor: '#FFF',
        // marginVertical: '35%',
        marginHorizontal: '2%',
        borderRadius: 20,
    },
    postHeader: {
        marginTop: 5,
        marginLeft: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    followersImage: {
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        marginRight: 10
    },
    textFollowersPost: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    modalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10
    }
})