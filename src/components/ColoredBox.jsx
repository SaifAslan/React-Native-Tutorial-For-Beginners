import React from 'react'
import { StyleSheet, View } from 'react-native'

const ColoredBox = ({color}) => {
  return <View style={{...styles.container,backgroundColor:color }}></View>
}

export default ColoredBox

const styles = StyleSheet.create({
    container: {
       width:"80%",
       height:80,
       borderRadius:4,
    }
})