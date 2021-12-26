import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";

const CardModal = ({ modalVisible, setModalVisible, addCardToColumn }) => {
  const [text, setText] = React.useState("");

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
          <View style={styles.modalBody}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setText(text)}
              value={text}
              placeholder="Enter a title"
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                addCardToColumn(text);
              }}
            >
              <Text style={{ color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CardModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalBody: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: "100%",
    borderColor: "#ccc",
  },
  submitButton: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "green",
  },
  closeButton: {
    margin: 10,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
