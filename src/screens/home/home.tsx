import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const homeScreen = (props: any): React.ReactElement => {
    const [data, setData] = useState<any>(['data1', 'data2', 'data3', 'data4'])
    const [dataFollowers, setDataFollowers] = useState<any>(['zlatan09', 'ggthunder', 'mungkung', 'demi', 'kaesa', 'kucinglucu', 'fiki', 'vlada', 'nokimeca', 'gula', 'nandi', 'takin', 'sepa', 'agung', 'gani'])
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const toggleLike = () => {
        setIsLiked(!isLiked)
    }
    var lastTap: number | null = null;
    const handleDoubleTap = () => {
        // console.log('masuk')
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
            toggleLike();
        } else {
            lastTap = now;
        }
    }
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
            <ScrollView>
                <View style={styles.wrapStory}>
                    <View>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true} style={styles.storyContainer}
                        >
                            <TouchableOpacity style={styles.instaStoryUser}>
                                <Image style={styles.images} source={require('../../assets/images/kucing.jpg')} />
                                <View style={styles.addContainer}>
                                    <Icon size={20} color='#FFF' name="add" />
                                </View>
                                <Text style={styles.textUserNameStory}>Your Story</Text>
                            </TouchableOpacity>
                            {dataFollowers.map((item: any, index: number) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("storyScreen", { item })}
                                        key={index}
                                        style={styles.btnStoryStle}>
                                        <View style={styles.instaStory}>
                                            <Image style={styles.images} source={require('../../assets/images/ibrahimovic.jpg')} />
                                        </View>
                                        <View>
                                            <Text>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                {data.map((item: string, index: number) => {
                    return (
                        <View key={index} style={styles.wrapUserPost}>
                            <View style={styles.postHeader}>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View>
                                        <Image style={styles.followersImage} source={require('../../assets/images/ibrahimovic.jpg')} />
                                    </View>
                                    <Text style={styles.textFollowersPost}>ibrahimovic</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon size={16} name="ellipsis-vertical" />
                                </TouchableOpacity>
                            </View>
                            <TouchableWithoutFeedback onPress={handleDoubleTap}>
                                <View style={{ height: 300 }}>
                                    <Image style={{ height: '100%', width: '100%' }} resizeMode='contain' source={require('../../assets/images/post1.jpg')} />
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.wrapSession}>
                                <View style={styles.likeShereCommContainer}>
                                    <TouchableOpacity>
                                        <Icon style={{ marginRight: 13 }} color={isLiked === false ? "#000":"#fb3958"} size={26} name={isLiked === false ? "heart-outline" : "heart-sharp"} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon style={{ marginRight: 13 }} size={24} name="ios-chatbubble-outline" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon size={24} name="paper-plane-outline" />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Icon size={24} name="ios-bookmark-outline" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.likedByContainer}>
                                <Image style={styles.likedByPhoto} source={require('../../assets/images/kucing.jpg')} />
                                <Text style={{ color: "#000" }}>Liked by </Text>
                                <Text style={{ color: "#000", fontWeight: 'bold' }}>guntur </Text>
                                <Text style={{ color: "#000" }}>and </Text>
                                <Text style={{ color: "#000", fontWeight: 'bold' }}>1,805 others</Text>
                            </View>
                            <View style={styles.textPost}>
                                <Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.{"\n"}
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#0645AD' }}>#Indonesia </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#0645AD' }}>#Jakarta </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#0645AD' }}>#Putussibau </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{ color: '#0645AD' }}>#KerupukBasah</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={{ color: '#989898', marginTop: 3 }}>View all 40 comments</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.text12}>20 hours ago.</Text>
                                        <Text style={styles.text12Bold}>See Translation</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        zIndex: 1,
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
    },
    wrapStory: {
        // height: '18%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#DFDFDF',
        paddingBottom: 10
    },
    storyContainer: {
        marginTop: 10
    },
    instaStory: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        borderWidth: 2,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    instaStoryUser: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 25,
        alignItems: 'center',
        marginLeft: 15
    },
    images: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
    },
    addContainer: {
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 25,
        right: -5,
        backgroundColor: '#3A9DF8',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#FFF',
    },
    textUserNameStory: {
        marginTop: 5
    },
    wrapUserPost: {
        marginBottom: 15,
    },
    postHeader: {
        marginLeft: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    followersImage: {
        height: 33,
        width: 33,
        borderRadius: 33 / 2,
        marginRight: 10
    },
    textFollowersPost: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    likeShereCommContainer: {
        flexDirection: 'row',
    },
    wrapSession: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 5
    },
    likedByContainer: {
        maxWidth: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5
    },
    likedByPhoto: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        marginRight: 5
    },
    textPost: {
        maxWidth: '80%',
        marginHorizontal: 10,
    },
    text12: {
        color: '#989898',
        marginTop: 3,
        fontSize: 12
    },
    text12Bold: {
        color: '#4B4B4B',
        marginTop: 3,
        fontSize: 12
    },
    btnStoryStle: {
        marginRight: 15,
        alignItems: 'center'
    }
})