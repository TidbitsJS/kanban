import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useStateContext } from "../context/StateContext";
import CommonModal from "./CommonModal";
import KanbanColumn from "./KanbanColumn";

const CustomKanban = () => {
  const { state, addColumn } = useStateContext();
  const windowHeight = Dimensions.get("window").height;
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
        minHeight: windowHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          contentContainerStyle={{ padding: 5 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {state.kanban.columns.map((column) => {
            return (
              <KanbanColumn key={column.title + column.id} column={column} />
            );
          })}
        </ScrollView>
      </View>

      <TouchableOpacity
        style={styles.addColumn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Add column +</Text>
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
    marginTop: 10,
    width: "96%",
    borderRadius: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
