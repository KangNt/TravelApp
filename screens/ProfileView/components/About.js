import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { gs, colors } from '../../../styles'

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionContainer} >ABOUT ME</Text>
            <Text style={gs.about} >Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam metus lacus, euismod
             eu ex non, rhoncus sagittis diam. Aliquam fringilla auctor nunc eu varius. Vivamus ut dui turpis</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
    about:{
        fontSize:15,
        fontWeight:"500",
        color: colors.darkHl,
        marginTop:8,
        lineHeight:22,
    }
})


