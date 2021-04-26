import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
// import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Images from '../res/image';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Header from './custom/Header';

export default class UpdateInfoPersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        name: 'Đỗ Hữu Thiện',
        birthday: '1986-03-05',
        gmai: 'fermatandrew@gmail.com',
        phone: '0987996939',
        position: 'Wedsite Developer',
    
    
    };
  }
  upDate = () => {
    this.props.navigation.goBack();
  };

  render() {
    console.log(this.state.name);

    return (
      <View style={{flex: 1}}>
        <Header
          isShowBack
          onPressBack={() => this.props.navigation.goBack()}
          title="Sửa thông tin cá nhân"
        />
        {/* http://45.119.213.225/timecard/storage/2020/08/avatar_1598275999.jpeg */}

        <ImageBackground
          source={Images.ic_bg_timecard}
          style={{width: screenWidth, height: screenHeight, flex: 1}}>
          <View style={{height: screenWidth * 0.5}}>
            <TouchableOpacity
              style={{
                width: screenWidth * 0.4,
                height: screenWidth * 0.4,
                alignSelf: 'center',
                borderRadius: 100,
                top: 10,

                flexDirection: 'row',
                position: 'absolute',
              }}>
              <Image
                style={{
                  width: screenWidth * 0.4,
                  height: screenWidth * 0.4,
                  alignSelf: 'center',
                  borderRadius: 100,
                }}
                source={{
                  uri: `http://45.119.213.225/timecard/storage/2020/08/avatar_1598275999.jpeg`,
                }}
              />
              <Image
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: 'center',
                  right: 35,
                  top: 50,

                  borderRadius: 100,
                  // position:'absolute'
                }}
                source={Images.icon_upload_img}
              />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Họ và tên :</Text>
              <TextInput
                onChangeText={(text) =>
                  {
                      this.setState({name:text})
                  }
                }
                defaultValue={this.state.name}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Ngày sinh :</Text>
              <TextInput
                value={this.state.birthday}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Gmail :</Text>
              <TextInput
                value={this.state.gmai}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Số điện thoại :</Text>
              <TextInput
                value={this.state.phone}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 40,
                marginVertical: 10,
                borderColor: 'pink',
                borderWidth: 1,
                borderRadius: 20,
              }}>
              <Text style={{paddingHorizontal: 10}}>Nghề nghiệp :</Text>
              <TextInput
                value={this.state.position}
                style={{width: screenWidth * 0.6}}></TextInput>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.upDate()}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#bb64a1',
                  width: 100,
                  height: 50,
                  borderRadius: 8,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>UPDATE</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
