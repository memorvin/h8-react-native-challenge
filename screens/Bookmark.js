import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Bookmark() {

  return (
    <View style={styles.view}>
      <Text>Bookmark page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})