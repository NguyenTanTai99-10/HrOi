import React, {useState} from 'react';
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Sizes from '../../utils/Sizes';
import {colors, screenWidth, screenHeight} from '../../res/style/theme';
import moment from 'moment';

export const DatetimePicker = () => {
  //==========================================================================
  const [date, setDate] = useState(new Date());
  const [DateStart, setDateStart] = useState('Chọn Ngày Bắt Đầu');

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const DayStart = moment(selectedDate).format('L');
    console.log('DayStart=======', DayStart);
    setShow(Platform.OS === 'ios');
    setDateStart(DayStart);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  //================================================================
  const [date1, setDate1] = useState(new Date());
  const [DateEnd, setDateEnd] = useState('Chọn Ngày Kết Thúc');

  const [mode1, setMode1] = useState('date');
  const [show1, setShow1] = useState(false);

  const onChange1 = (event, selectedDate1) => {
    const DayEnd = moment(selectedDate1).format('L');
    console.log('DayEnd=======', DayEnd);
    setShow1(Platform.OS === 'ios');
    setDateEnd(DayEnd);
  };

  const showMode1 = (currentMode1) => {
    setShow1(true);
    setMode1(currentMode1);
  };

  const showDatepicker1 = () => {
    showMode1('date');
  };

  //==========================================================================
  const [date2, setDate2] = useState(new Date());
  const [TimeStart, seTimeStart] = useState('Thời Gian Bắt Đầu');
  const [mode2, setMode2] = useState('date');
  const [show2, setShow2] = useState(false);

  const onChange2 = (event, selectedDate2) => {
    const chooseTimeStart = formatDate2(selectedDate2);
    console.log('TimeStart=======', chooseTimeStart);
    setShow2(Platform.OS === 'ios');
    seTimeStart(chooseTimeStart);
  };

  const showMode2 = (currentMode) => {
    setShow2(true);
    setMode2(currentMode);
  };
  const formatDate2 = (date) => {
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    const s = `0${date.getSeconds()}`.slice(-2);
    return `${h} : ${m}: ${s} `;
  };

  const showTimepicker2 = () => {
    showMode2('time');
  };
  //================================================================
  //   //==========================================================================
  const [date3, setDate3] = useState(new Date());
  const [TimeEnd, seTimeEnd] = useState('Thời Gian Kết Thúc');
  const [mode3, setMode3] = useState('date');
  const [show3, setShow3] = useState(false);

  const onChange3 = (event, selectedDate3) => {
    const ChooseTimeEnd = formatDate3(selectedDate3);
    console.log('TimeEnd=======', ChooseTimeEnd);
    setShow3(Platform.OS === 'ios');
    seTimeEnd(ChooseTimeEnd);
  };

  const showMode3 = (currentMode) => {
    setShow3(true);
    setMode3(currentMode);
  };
  const formatDate3 = (date) => {
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    const s = `0${date.getSeconds()}`.slice(-2);
    return `${h} : ${m}: ${s} `;
  };

  const showTimepicker3 = () => {
    showMode3('time');
  };
  //   ================================================================

  return (
    <View>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
        
      </View> */}
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{marginTop: 10,}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>Chọn Ngày Bắt Đầu * </Text>
          <TouchableOpacity
            style={{
              width: (screenWidth * 0.8) / 2,
              marginTop: 10,

              height: 40,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              borderColor: '#BFBFBF',
              paddingHorizontal: 10,
              borderWidth:1
            }}
            onPress={showDatepicker}>
            <Text>{DateStart}</Text>

            <Image
              source={require('../../res/image/img/arrow-down.png')}
              style={{
                width: Sizes.h30,
                height: Sizes.h30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10,}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>Chọn Thời Gian Bắt Đầu * </Text>
          <TouchableOpacity
            style={{
              width: (screenWidth * 0.8) / 2,
              marginTop: 10,

              height: 40,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              borderColor: '#BFBFBF',
              paddingHorizontal: 10,
              borderWidth:1
            }}
            onPress={showTimepicker2}>
            <Text>{TimeStart}</Text>
            <Image
              source={require('../../res/image/img/arrow-down.png')}
              style={{
                width: Sizes.h30,
                height: Sizes.h30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date2}
          mode={mode2}
          is24Hour={true}
          display="default"
          onChange={onChange2}
        />
      )}

      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{marginTop: 10,}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>Chọn Ngày Kết Thúc * </Text>
          <TouchableOpacity
            style={{
              width: (screenWidth * 0.8) / 2,
              marginTop: 10,

              height: 40,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              borderColor: '#BFBFBF',
              paddingHorizontal: 10,
              borderWidth:1
            }}
            onPress={showDatepicker1}>
            <Text>{DateEnd}</Text>

            <Image
              source={require('../../res/image/img/arrow-down.png')}
              style={{
                width: Sizes.h30,
                height: Sizes.h30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10,}}>
          <Text style={{fontSize: 15, fontWeight: '700'}}>
            Chọn Thời Gian Kết Thúc *{' '}
          </Text>
          <TouchableOpacity
            style={{
              width: (screenWidth * 0.8) / 2,
              marginTop: 10,

              height: 40,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 8,
              backgroundColor: '#FFFFFF',
              borderColor: '#BFBFBF',
              paddingHorizontal: 10,
              borderWidth:1
            }}
            onPress={showTimepicker3}>
            <Text>{TimeEnd}</Text>
            <Image
              source={require('../../res/image/img/arrow-down.png')}
              style={{
                width: Sizes.h30,
                height: Sizes.h30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {show1 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode1}
          is24Hour={true}
          display="default"
          onChange={onChange1}
        />
      )}
      {show3 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date3}
          mode={mode3}
          is24Hour={true}
          display="default"
          onChange={onChange3}
        />
      )}
    </View>
  );
};
