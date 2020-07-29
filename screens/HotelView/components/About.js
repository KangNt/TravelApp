import React from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import { gs, colors} from '../../../styles';




const hotel = { 
    name : "Mt. Catlin Hotel",
    price : "$967",
    location : "New York",
    about : 
    "Num just eros, vehicula vel ut, lavinia a erat"
}


export default function About() {
    return (
        <View style={styles.container}> 
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>
                {hotel.price} &#822; {hotel.location}
            </Text>

            <View style={gs.divider}/>

            <Text style={gs.sectionTitle}>{hotel.name}</Text>
            <Text style={gs.about}>{hotel.about}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info:{
        color: colors.textSec,
        fontWeight: "600",
        marginTop: 4
    },
    about:{
        fontSize: 13,
        fontWeight: "600",
        color: colors.textSec,
        marginTop: 6,
        lineHeight :20
    }
    
})