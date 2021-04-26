import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import Header from './custom/Header';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Images from '../res/image';
import DropDownPicker from 'react-native-dropdown-picker';
import TextInputAnimated from './custom/TextInputAnimated';

export default class AddRequiesComponent extends Component {
  constructor(props) {
    super(props);
    let controller;
    this.state = {
      TimeLate: '',
      DateEnd: '',
      DateStart: '',
      disabled: false,
    };
  }

  onChangeDateStart = (text) => {
    this.setState({DateStart: text});
  };

  onClearDateStart = () => {
    this.setState({DateStart: ''});
  };
  onChangeDateEnd = (text) => {
    this.setState({DateEnd: text});
  };

  onClearDateEnd = () => {
    this.setState({DateEnd: ''});
  };
  onDissmiss = () => {
    this.controller.close();
  };

  render() {
    return (
      <View style={{flex:1}}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Add Your Request"
        />
        <TouchableWithoutFeedback
        onPress={()=>{this.controller.close(); Keyboard.dismiss()}}

        // onPress = {Keyboard.dismiss}
        >
          <ImageBackground
            source={Images.ic_bg_timecard}
            style={{width: screenWidth, height: screenHeight , flex:1}}>
              <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 20
                // marginVertical: 20,
               
              }}>
              <Text style={{fontSize: 15, fontWeight: '700'}}>
                Type request *{' '}
              </Text>
              <View
                style={[
                  {marginTop: 10},
                  
                  
                ]}>
                <DropDownPicker
                  controller={(instance) => (this.controller = instance)}
                  items={[
                    {
                      label: 'Late',
                      value: 'Late',

                      //   hidden: true,
                    },
                    {
                      label: 'OT',
                      value: 'OT',
                    },
                    {
                      label: 'Off Day',
                      value: 'Off Day',
                    },
                    {
                      label: 'Check out soon',
                      value: 'Check out soon',
                    },
                  ]}
                  placeholder="Type request"
                  defaultValue={this.state.TimeLate}
                  containerStyle={{height: 50}}
                  //   style={[{backgroundColor: '#fafafa', marginTop:20}]}
                  itemStyle={{
                    justifyContent: 'center',
                  }}
                  
                  //   dropDownStyle={{backgroundColor: '#fafafa' }}
                  onChangeItem={(item) =>
                    this.setState({
                      TimeLate: item.value,
                    })
                  }
                  onOpen={Keyboard.dismiss}
                />
              </View>
            </View>
            
            <Text style={{fontSize: 15, fontWeight: '700', marginTop: 10, marginLeft:20}}>
                  Date Start *{' '}
                </Text>
                <View
                  style={{
                    borderColor: '#BFBFBF',

                    marginTop: 10,
                  }}>
                  <TextInputAnimated
                    onPressFocus={this.onDissmiss}
                    //  isPassword
                    //  style={{height:50}}
                    label="Date Start"
                    value={this.state.DateStart}
                    onChangeText={this.onChangeDateStart}
                    onPressClear={this.onClearDateStart}
                  />
                </View>
                <Text style={{fontSize: 15, fontWeight: '700', marginTop: 10,marginLeft:20}}>
                  Date End *
                </Text>
                <View
                  style={{
                    borderColor: '#BFBFBF',

                    marginTop: 10,
                  }}>
                  <TextInputAnimated
                    onPressFocus={this.onDissmiss}
                    //  isPassword
                    //  style={{height:50}}
                    label="Date End"
                    value={this.state.DateEnd}
                    onChangeText={this.onChangeDateEnd}
                    onPressClear={this.onClearDateEnd}
                  />
                </View>
                <Text style={{fontSize: 15, fontWeight: '700', marginTop: 10,marginLeft:20}}>
                  Note *
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    marginTop: 10,
                  }}>
                  <TextInput
                    style={{
                      width: '90%',
                      borderWidth: 1,
                      height: 100,
                      borderColor: '#BFBFBF',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                    }}
                    multiline
                    onFocus={() => this.controller.close()}></TextInput>
                </View>
                <View
                  style={{
                    top: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 50,
                      width: 100,
                      backgroundColor: '#bb64a1',
                      borderRadius: 10,
                    }}>
                    <Text style={{color: 'white', fontWeight: '700'}}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>

            </ScrollView>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
