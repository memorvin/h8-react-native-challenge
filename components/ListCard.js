import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { WebView } from 'react-native-webview'

export default function ListCard({ picture, navigation }) {

  useEffect(() => {
    
  })

  handlePress = () => {
    navigation.navigate('Detail', { picture: picture })
  }
  
  return (
    <TouchableOpacity
      style={styles.view}
      onPress={handlePress}
      activeOpacity={0.6}
    >
      {
        picture.media_type === 'image'
          ? <Image
              source={{uri: picture.url}}
              style={styles.image}
            />
          : <WebView
              source={{html: `<iframe width="100%" height="50%" src="${picture.url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}}
            />
      }
      <View style={styles.button}>
        <Text style={styles.btnText} >
          {picture.title}
        </Text>
      </View>
    </TouchableOpacity>  
  )
}

const styles = StyleSheet.create({
  view: {
    width: '45%',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 2.22,
    elevation: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
})
