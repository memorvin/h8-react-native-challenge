import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker';
import { fetchPictures } from '../store/actions'

export default function SearchBox() {

  const [startDate, setStartDate] = useState(new Date(1598051730000));
  const [startMode, setStartMode] = useState('date');
  const [startShow, setStartShow] = useState(false);
  const [endDate, setEndDate] = useState(new Date(1598051730000));
  const [endMode, setEndMode] = useState('date');
  const [endShow, setEndShow] = useState(false); 
  const dispatch = useDispatch()
  const url = useSelector(state => state.API.url)

  const onStartChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setStartDate(currentDate);
    setStartShow(Platform.OS === 'ios' ? true : false);
  };

  const onEndChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setEndDate(currentDate);
    setEndShow(Platform.OS === 'ios' ? true : false);
  };

  const showStartMode = currentMode => {
    setStartShow(true);
    setStartMode(currentMode);
  };

  const showEndMode = currentMode => {
    setEndShow(true);
    setEndMode(currentMode);
  };

  const showStartDatepicker = () => {
    showStartMode('date');
  };

  const showEndDatepicker = () => {
    showEndMode('date');
  };

  const handleSubmit = () => {
    const d1 = startDate.getDate()
    const m1 = startDate.getMonth()+1
    const y1 = startDate.getFullYear()
    const d2 = endDate.getDate()
    const m2 = endDate.getMonth()+1
    const y2 = endDate.getFullYear()
    const x = `${url}&start_date=${y1}-${m1}-${d1}&end_date=${y2}-${m2}-${d2}`
    console.log(x)
    dispatch(fetchPictures(`${url}&start_date=${y1}-${m1}-${d1}&end_date=${y2}-${m2}-${d2}`))
  }

  return (
    <View style={styles.box}>
      <View>
        <TouchableOpacity style={styles.button} onPress={showStartDatepicker}>
          {
            startDate
              ? <Text style={styles.text}>
                  {startDate.toDateString()}
                </Text>
              : <Text style={styles.text}>
                  START DATE
                </Text>
          }
        </TouchableOpacity>
        {startShow && (
          <DateTimePicker
            timeZoneOffsetInMinutes={0}
            value={startDate}
            mode={startMode}
            is24Hour={true}
            display="default"
            onChange={onStartChange}
            maximumDate={new Date()}
          />
        )}
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={showEndDatepicker}>
          {
            endDate
              ? <Text style={styles.text}>
                  {endDate.toDateString()}
                </Text>
              : <Text style={styles.text}>
                  END DATE
                </Text>
          }
        </TouchableOpacity>
        {endShow && (
          <DateTimePicker
            timeZoneOffsetInMinutes={0}
            value={endDate}
            mode={endMode}
            is24Hour={true}
            display="default"
            onChange={onEndChange}
            minimumDate={startDate}
            maximumDate={new Date()}
          />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 20,
    width: 'auto',
    flexDirection:'row',
    // flexWrap: 'wrap',
  },
  button: {
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginHorizontal: 2,
    backgroundColor: '#DDDDDD',
  },
  text: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 16
  }
})