import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const MyModal = ({ visible, onRequestClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Halo Zhahnur Arif</Text>
          <Pressable style={styles.button} onPress={onRequestClose}>
            <Text style={styles.textStyle}>Kembali</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  textStyle: {
    color: 'white',
  },
});

export default MyModal;
