import React, { useEffect } from 'react'
import { Dimensions, Text, ScrollView, StyleSheet, Image, BackHandler } from 'react-native'
import { WebView } from 'react-native-webview'
import AnimatedImage from '../components/AnimatedImage'
// import { CommonActions } from '@react-navigation/native';

export default function Picture(props) {
  
  useEffect(() => {
    
    // const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    //   console.log(props.navigation)
    //   props.navigation.goBack()
      // props.navigation.dispatch(CommonActions.goBack());
    //   return true;
    // });

    Image.getSize(props.route.params.picture.url, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get('window').height;
      const maxWidth = Dimensions.get('window').width;
      const x = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      setRatio(x)
    }, error => {
      console.log('error:', error);
    });

    // return backHandler.remove()

  }, [])

  return(
    <ScrollView contentContainerStyle={styles.view} >
      <Text style={styles.title}>{props.route.params.picture.title}</Text>
      <Text style={styles.details}>{props.route.params.picture.date}</Text>
      {
        props.route.params.picture.copyright
          ? <Text style={styles.details}>{props.route.params.picture.copyright}</Text>
          : <Text style={styles.details}>No copyright data available</Text>
      }
      {
        props.route.params.picture.media_type === 'image'    
          ? <AnimatedImage url={props.route.params.picture.url}/>
          : <WebView
              source={{html: `<iframe width="100%" height="50%" src="${props.route.params.picture.url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`}}
            />
      }
        <Text style={styles.info}>Pinch picture to zoom in!</Text>
        <Text style={styles.explanation}>{props.route.params.picture.explanation}</Text>
      </ScrollView>
  )

}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center'      
  },
  title: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 30,
    textAlign: 'center'
  },
  explanation: {
    fontFamily: 'sans-serif-light',
    fontSize: 18,
    textAlign: 'justify',
    marginHorizontal: 15
  },
  details: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  info: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  }
})