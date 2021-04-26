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
  Alert
} from 'react-native';
// import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Images from '../res/image';
import {colors, fonts, screenWidth, screenHeight} from '../res/style/theme';
import Animation from './custom/Animated';
import Header from './custom/Header';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';
import ImagePicker from 'react-native-image-picker';


export default class UpdateInfoPersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        name: 'Đỗ Hữu Thiện',
        birthday: '1986-03-05',
        gmai: 'fermatandrew@gmail.com',
        phone: '0987996939',
        position: 'Wedsite Developer',
        animated :false
    
    
    };
  }
   onCheckCameraPermission = () => {
    check(Platform.OS === 'android' ?
        PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA).then((status) => {
            console.log('status===',RESULTS.DENIED);
            if (status === RESULTS.DENIED) {
                request(Platform.OS === 'android' ?
                    PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA).then(result => {
                        console.log("result==",result);
                        if (result === RESULTS.GRANTED) {
                          this.onCheckPhotoLibraryPermission()
                        }
                    })
            } else
                if (status === RESULTS.GRANTED) {
                  this.onCheckPhotoLibraryPermission()
                }
        }).catch(error => {
          console.log('vào day1');
          Alert.alert('123');
        })
}
 onCheckPhotoLibraryPermission = () => {
    check(Platform.OS === 'android' ?
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE : PERMISSIONS.IOS.PHOTO_LIBRARY).then((status) => {
            if (status === RESULTS.DENIED) {
                request(Platform.OS === 'android' ?
                    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE : PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
                        console.log("result1====",result);
                        if (result === RESULTS.GRANTED) {
                            if (Platform.OS === 'ios') {
                              this.onImagePicker();
                            } else {
                              this.onCheckWriteStoragePermission()
                            }
                        }
                    })
            }
            if (status === RESULTS.GRANTED) {
                if (Platform.OS === 'ios') {
                  this.onImagePicker();
                } else {
                  this.onCheckWriteStoragePermission()
                }
            }
        }).catch(error => {
          console.log('vào day2');
          
             Alert.alert('123');
        })
}
 onCheckWriteStoragePermission = () => {
    check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then((status) => {
        if (status === RESULTS.DENIED) {
            request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).then(result => {
                console.log(result);
                if (result === RESULTS.GRANTED) {
                  this.onImagePicker();
                }
            })
        }
        if (status === RESULTS.GRANTED) {
            onImagePicker();
        }
    }).catch(error => {
      console.log('vào day3');
      
      Alert.alert('123');
    })
}
 openImage = () => {
    this.onCheckCameraPermission()
}
 onImagePicker = () => {
    ImagePicker.showImagePicker((response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
            console.log('vào day4');
        } else if (response.error) {
          console.log('vào day5');

        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            // console.log(response.uri,"uri");
            // setProgress(true);
            // setIsMessage(true);
            // dispath(avatarUserAction(
            //     route.params.useInfor.id, route.params.useInfor.token, response.uri
            // ));
            // setAvatar('data:image/jpeg;base64,' + response.data);
        }
    });
}
  upDate = () => {
    // this.props.navigation.goBack();
    setTimeout(() => this.props.navigation.goBack(), 5000)
    this.setState({animated:true})
  };

  render() {
    

    return (
      <View style={{flex: 1}}>
        {this.state.animated && (
          <Animation
            offAnimatedState={() => this.setState({animated: false})}
            titlte = "Update Thành Công"
          />
        )}
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
            onPress={()=>{this.openImage()}}
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
