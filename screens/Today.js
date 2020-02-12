import React, { useEffect, useState } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, ActivityIndicator, Modal, TouchableHighlight } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPicture } from '../store/actions'
import { CLEAR_API_ERROR } from '../store/actionTypes'

export default function Today(props) {
  
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.API.isLoading)
  const error = useSelector(state => state.API.error)
  const picture = useSelector(state => state.API.picture)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    dispatch(fetchPicture('https://api.nasa.gov/planetary/apod?api_key=JhP6oQM9WqrQ772Zlu007ThAa2N9gpowfl09F6Uo'))
  }, [])

  const handlePress = () => {
    props.navigation.navigate('Detail', { picture: picture })
  }

  const displayText = () => {
    if (picture.explanation) {
      return picture.explanation.slice(0, 300)
    }
  }

  const toggleModal = () => {
    setVisible(!visible)
  }

  const clearError = () => {
    dispatch({
      type: CLEAR_API_ERROR
    })
  }

  return(
    isLoading
      ? <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="gray" />
        <Text style={{ textAlign: 'center'}}>Fetching data...</Text>
      </View>
      : error
        ? <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={() => clearError()}
          >
            <View>
              <Text>An error occured!</Text>
              <Text>{error}</Text>
              <TouchableHighlight
                onPress={() => toggleModal()}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </Modal>
        : picture
          ? <View style={styles.view}>
              <ImageBackground
                source={{uri: picture.url}}
                style={styles.image}
              >
                <View style={styles.text}>
                  <Text style={styles.title}>{picture.title}</Text>  
                  <Text style={styles.explanation}>{displayText()}</Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handlePress}
                    activeOpacity={1}
                  >
                    <Text style={styles.btnText}>VIEW MORE</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          : <View></View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '70%',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'sans-serif-condensed'
  },
  explanation: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
    fontFamily: 'sans-serif-light'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 4,
    opacity: 0.7,
    borderRadius: 10,
    marginTop: 2,
  },
  btnText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'sans-serif-condensed'
  }
})