import React from 'react'
import { FlatList, Text } from 'react-native'

function FlatListComponent({colors}) {
  return (
    <FlatList style={{height:60 ,borderWidth:2,borderColor:"black"}} data={colors} renderItem={(info)=>{
        return <Text style={{color:info.item , fontSize:20}}>{info.item}</Text>
    }}/> 
  )
}

export default FlatListComponent