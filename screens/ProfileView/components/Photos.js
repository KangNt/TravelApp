import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import index from '../../HotelView';



const photos = [
    require("../../../assets/travel1.png"),
    require("../../../assets/travel2.png"),
    require("../../../assets/travel3.png"),
    require("../../../assets/travel4.png"),
    require("../../../assets/travel5.png"),
    require("../../../assets/travel6.png"),
    require("../../../assets/travel7.png"),
    require("../../../assets/travel8.png"),
];

export default function Photos() {
    return (
        <View style={[styles.contrainer, { marginTop: 8 }]}>
            <Text style={gs.sectionTitle}>My Photos</Text>
            <View style={styles.photosContainer}>
                {photos.map((photo, index) => {
                    return <Image
                        source={photo}
                        key={index}
                        style={[
                            styles.photo,
                            {
                                marginRight: (index + 1) % 3 === 0 ? 0 : 12
                            }

                        ]} />;
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    photosContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        marginTop: 16,

    },
    photo: {
        width: 100,
        height: 108,
        marginBottom: 12,
        borderRadius: 8,
    }
})
