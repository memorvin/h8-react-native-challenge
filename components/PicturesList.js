import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import ListCard from './ListCard'

export default function PicturesList({ pictures, navigation }) {

  const renderList = () => {
    return pictures.map(picture => {
      return <ListCard picture={picture} navigation={navigation} key={picture.url} />
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.view} style={styles.margin}>
      {renderList()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  margin: {
    marginBottom: 105
  }
})