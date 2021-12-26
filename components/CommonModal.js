import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";

const CommonModal = ({ modalVisible, setModalVisible, handleSubmit }) => {
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
            <Text style={{ color: "#f00" }}>Close</Text>
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
                handleSubmit(text);
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

export default CommonModal;

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
    color: "#2b386e",
  },
  submitButton: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#3aab5a",
  },
  closeButton: {
    margin: 10,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
