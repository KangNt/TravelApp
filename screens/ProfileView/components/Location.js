import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { gs, colors } from '../../../styles'

export default function Location() {
    return (
        <View style={styles.container}>
            <View style={{ width: 75, height: 75 }}>
                <Image source={require('../../../assets/location.png')}
                    style={{ flex: 1, width: undefined }} resizeMode="center" />

            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.location}> Switzerland</Text>
                <Text style={styles.distance}> 227km away</Text>
            </View>

            <Entypo name="chevron-right" size={24}  color={colors.darkHl} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
    about: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.darkHl,
        marginTop: 8,
        lineHeight: 22,
    },
    location:{
        fontSize:18,
        color:colors.text,
        fontWeight:"500"
    },
    distance:{
        ...gs.smallText,
        color:colors.darkHl,
        marginTop:4,
        textTransform: "uppercase",
    }
})


