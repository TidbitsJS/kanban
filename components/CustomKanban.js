import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useStateContext } from "../context/StateContext";
import CommonModal from "./CommonModal";
import KanbanColumn from "./KanbanColumn";

const CustomKanban = () => {
  const { state, addColumn } = useStateContext();
  const [modalVisible, setModalVisible] = React.useState(false);

  const addNewColumn = (title) => {
    if (title.trim() === "") {
      return;
    }

    addColumn(title);
    setModalVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={state.kanban.columns}
        renderItem={({ item }) => (
          <KanbanColumn key={item.title + item.id} column={item} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: "100%" }}
        horizontal
      />

      <TouchableOpacity
        style={styles.addColumn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#1f1010" }}>
          Add column
        </Text>
      </TouchableOpacity>

      {modalVisible && (
        <CommonModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleSubmit={addNewColumn}
        />
      )}
    </View>
  );
};

export default CustomKanban;

const styles = StyleSheet.create({
  addColumn: {
    padding: 12,
    marginVertical: 3,
    width: "96%",
    borderRadius: 25,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
