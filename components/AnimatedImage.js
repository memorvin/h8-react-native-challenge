import React, { useState, useEffect } from 'react'
import { View, Dimensions, Animated, Image } from 'react-native'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'

const AnimatedImage = ({ url }) => {
  
  scale = new Animated.Value(1)
  const [ratio, setRatio] = useState(2/3)

  useEffect(() => {
    Image.getSize(url, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get('window').height;
      const maxWidth = Dimensions.get('window').width;
      const x = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      setRatio(x)
    }, error => {
      console.log('error:', error);
    });
  }, [])

  onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale: this.scale }
      }
    ],
    {
      useNativeDriver: true
    }
  )

  onZoomStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }
  }

  return (
    <View >
      <PinchGestureHandler
        onGestureEvent={this.onZoomEvent}
        onHandlerStateChange={this.onZoomStateChange}>
        <Animated.Image
          source={{ uri: url }}
          style={{
            transform: [{ scale: this.scale }],
            zIndex: 10,
            width: '80%',
            height: undefined,
            aspectRatio: ratio,
            marginVertical: 10,
          }}
        />
      </PinchGestureHandler>
    </View>
  )
}

export default AnimatedImage