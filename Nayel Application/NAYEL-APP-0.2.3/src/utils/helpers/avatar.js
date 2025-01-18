import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import images from '../../images';
import crudHandler from './crudHandler';
import { AvatarStyles } from '../../styles';
import { useTranslation } from "react-i18next";


export const Avatar = props => {
  const [uri, setUri] = useState(props.source?.uri || undefined);
  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);
  const open = () => setVisible(true);
  const { t } = useTranslation();

  const chooseImage = async () => {
    try {
      close();
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        cropperCircleOverlay: true, // Set to true if you want a circular crop
        includeBase64: true, // Request base64 data
      });

      setUri(image.path);
      props.onChange?.(image);

      const base64Data = image.data;
      const toSend = {
        image: base64Data,
      };

      const profileImage = await crudHandler.create('/profilepicture', toSend);
      props.onMessage?.(profileImage.message);
    } catch (error) {
      ToastAndroid.show("Profile Picture Unchanged",ToastAndroid.SHORT)
      // console.warn('Error choosing the image:', error);
      close();
    }

  };

  const openCamera = async () => {
    try {
      close(); // Close the modal before opening the camera
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,        
        cropperCircleOverlay: true, // Set to true if you want a circular crop
        includeBase64: true, // Request base64 data
      });
  
      setUri(image.path);
      props.onChange?.(image);
  
      const base64Data = image.data;
  
      const toSend = {
        image: base64Data,
      };
  
      // Call the CRUD handler to store the image data in the database
      const profileImage = await crudHandler.create('/profilepicture', toSend);
      props.onMessage?.(profileImage.message);
      

    } catch (error) {
      ToastAndroid.show("Profile Picture Unchanged",ToastAndroid.SHORT)
      // console.warn('Error opening the camera:', error);
    } finally {
      close(); 
    }

  };
  
  
  return (
    <>
      <TouchableOpacity onPress={open}>
        <Image
          style={AvatarStyles.avatar}
          {...props}
          source={uri ? { uri } : props.source}
        />
      </TouchableOpacity>
      <Modal
        isVisible={visible}
        onBackButtonPress={close}
        onBackdropPress={close}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <SafeAreaView style={AvatarStyles.options}>
          <Pressable style={AvatarStyles.option} onPress={chooseImage}>
            <Image style={AvatarStyles.icon} source={images.GalleryIcon} />
            <Text>{t("Library")}</Text>
          </Pressable>
          <Pressable style={AvatarStyles.option} onPress={openCamera}>
            <Image style={AvatarStyles.icon} source={images.CameraIcon} />
            <Text>{t("Camera")}</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </>
  );
};
