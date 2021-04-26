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
import DateSelector from './custom/DateSelector';

export default class AddRequiesComponent extends Component {
  constructor(props) {
    super(props);
    let controller;
    this.state = {
      TimeLate: '',
      DateEnd: '',
      DateStart: '',
      disabled: false,
      ListDate: '',
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
    console.log(this.state.ListDate);
    return (
      <View style={{flex: 1}}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Add Your Request"
        />
        <TouchableWithoutFeedback
          onPress={() => {
            this.controller.close();
            Keyboard.dismiss();
          }}

          // onPress = {Keyboard.dismiss}
        >
          <ImageBackground
            source={Images.ic_bg_timecard}
            style={{width: screenWidth, height: screenHeight, flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View
                style={{
                  marginHorizontal: 20,
                  marginTop: 20,
                  // marginVertical: 20,
                }}>
                <Text style={{fontSize: 15, fontWeight: '700'}}>
                  Type request *{' '}
                </Text>
                <View
                  style={[
                    Platform.OS !== 'android' && {
                      zIndex: 10,
                    },
                    {
                      marginTop: 10,
                    },
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
              <View
                style={{
                  marginHorizontal: 20,
                  marginTop: 20,
                  // marginVertical: 20,
                }}>
                <DateSelector
                  getAll={(date) => {
                    console.warn(date);
                    this.setState({ListDate: date});
                  }}></DateSelector>
              </View>
              <View
                style={{
                  marginHorizontal: 20,
                  marginTop: 10,
                  borderWidth: 1,
                  height: 40,
                  backgroundColor: '#FFFFFF',

                  borderColor: '#BFBFBF',
                  paddingHorizontal: 10,
                  borderRadius: 10,
                }}>
                {this.state.ListDate !== '' && (
                  <ScrollView horizontal={true}>
                    {this.state.ListDate.map((item) => {
                      return (
                        <View
                          style={{
                            marginLeft: 5,
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              borderRadius: 7,
                              padding: 5,
                              backgroundColor: '#e8eff7',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text
                              style={{
                                fontWeight: 'bold',
                                textAlignVertical: 'center',
                                textAlign: 'center',
                              }}>
                              {item.year +
                                '-' +
                                (item.month + 1) +
                                '-' +
                                item.day}
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                )}
              </View>

              <View
                style={{
                  marginHorizontal: 20,
                  marginTop: 10,
                  
                  
                  

                
                }}>
                <Text
                  style={{
                    
                    textAlignVertical: 'center',
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 10,
                  }}>
                  {'Total days : ' +
                    ((this.state.ListDate.length + '').length < 2
                      ? '0' + this.state.ListDate.length
                      : this.state.ListDate.length)}
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginTop: 10,
                  marginLeft: 20,
                }}>
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
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginTop: 10,
                  marginLeft: 20,
                }}>
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
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginTop: 10,
                  marginLeft: 20,
                }}>
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
                  marginVertical:20,
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
