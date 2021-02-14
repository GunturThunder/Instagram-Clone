import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ChatsScreen = (): React.ReactElement => {
    const dataChat = ['1', '2', '3', '4', '4', '6','1', '2', '3', '4', '4', '6']
    const renderRow = ({ item, index }: any) => (
        <TouchableOpacity style={styles.eachChatContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                <View>
                    <Image style={{ width: 80, height: 80, borderRadius: 80 / 2 }} source={require('../assets/images/kucing.jpg')} />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.nameChat}>
                        <Text>Guntur</Text>
                        <Text style={{ color: '#25D366' }}>4:47 AM</Text>
                    </View>
                    <View style={styles.nameChat1}>
                        <Text>Apa kabar</Text>
                        <View style={styles.greenDot}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={styles.wrap}>
            <FlatList
                data={dataChat}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
            // onLayout={() => { flatListRef.current.scrollToEnd({ animated: true }) }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(({
    wrap: {
        flex: 1,
    },
    eachChatContainer: {
        marginTop: 20,
    },
    nameChat: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameChat1: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#dfe1e5'
        // alignItems:'center' 
    },
    greenDot: {
        width: 26,
        height: 25,
        borderRadius: 25 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25D366'
    }
}))