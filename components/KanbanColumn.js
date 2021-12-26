import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useStateContext } from "../context/StateContext";
import CommonModal from "./CommonModal";

const KanbanColumn = ({ column }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { addCard } = useStateContext();

  const addCardToColumn = (title) => {
    if (title.trim() === "") {
      return;
    }

    addCard(column.id, title);
    setModalVisible(false);
  };

  return (
    <View style={styles.column}>
      <View style={styles.wrapper}>
        <View style={styles.columnHeader}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1f1010" }}>
            {column.title}
          </Text>
          <View style={styles.badge}>
            <Text
              style={{
                fontSize: column.cards.length > 20 ? 10 : 12,
                color: "#fff",
              }}
            >
              {column.cards.length > 20 ? "20+" : column.cards.length}
            </Text>
          </View>
        </View>
        <View style={styles.columnBody}>
          <FlatList
            data={column.cards}
            renderItem={({ item }) => (
              <View style={styles.card} key={item.id}>
                <Text style={{ fontSize: 14, color: "#2b386e" }}>
                  {item.title}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.columnFooter}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={{ color: "#1f1010" }}>Add Todo</Text>
      </TouchableOpacity>

      {modalVisible && (
        <CommonModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleSubmit={addCardToColumn}
        />
      )}
    </View>
  );
};

export default KanbanColumn;

const styles = StyleSheet.create({
  column: {
    width: 300,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
  },
  wrapper: {
    flex: 1,
  },
  columnHeader: {
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "#ddd",
  },
  badge: {
    backgroundColor: "#1f1010",
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  columnBody: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  columnFooter: {
    padding: 10,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
});
