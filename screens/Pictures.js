import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Vibration, Text, View, StyleSheet, ActivityIndicator, TouchableHighlight, Modal } from 'react-native'
import { fetchPictures } from '../store/actions'
import PicturesList from '../components/PicturesList'
import SearchBox from '../components/SearchBox'
import { ShakeEventExpo } from '../components/Shaker'
import { CLEAR_API_ERROR } from '../store/actionTypes'

export default function Pictures({ navigation }) {
  
  const dispatch = useDispatch()
  const pictures = useSelector(state => state.API.pictures)
  const error = useSelector(state => state.API.error)
  const isLoading = useSelector(state => state.API.isLoading)
  const url = useSelector(state => state.API.url)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    ShakeEventExpo.addListener(() => {
      console.log('shake shake')
      Vibration.vibrate(100)
      dispatch(fetchPictures(`${url}&count=10`))
    });

    return () => {
      ShakeEventExpo.removeListener();
      console.log('clean up')
    }
  }, [])

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
        : <View syle={styles.view}>
          <View style={styles.test}>
            <SearchBox />
          </View>
            <View style={styles.textBox}>
              <Text style={styles.text}>Search or shake to see cool pictures!</Text>
            </View>
            <PicturesList
              pictures={pictures}
              navigation={navigation}
            />
          </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  test: {
    marginHorizontal: '6.5%'
  },
  textBox: {
    alignItems: 'center',
    marginHorizontal: 20,
    width: 'auto'
  },
  text: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
