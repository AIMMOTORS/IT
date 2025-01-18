import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import IconF from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon library
import { SF, SH } from '../dimensions';
import Colors from '../Colors';








const ShareModal = ({ isVisible, onClose, userId, bikeId }) => {
  const [qrData, setQRData] = useState(generateQRCode());

  useEffect(() => {
    const interval = setInterval(() => {
      setQRData(generateQRCode());
    }, 15000); // Refresh every 15 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  function generateQRCode() {
    // Generate a 6-digit unique number (you may need to customize this logic)
    const uniqueNumber = Math.floor(100000 + Math.random() * 900000);
    const qrData = `${userId}${bikeId}${uniqueNumber}`;
    return qrData;
  }

  return (
    <Modal transparent visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <IconF
              size={SF(25)}
              name="close"
              color={Colors.gray_text_color}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Generated QR Code</Text>
          <QRCode value={qrData} size={200} />
          <Text>User ID: {userId}</Text>
          <Text>Bike ID: {bikeId}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#FAF9F6',
    padding: '20%',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: SH(20),
    right: SH(20),
  },
});

export default ShareModal;
