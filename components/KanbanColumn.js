import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";

const windowHeight = Dimensions.get("window").height;

const KanbanColumn = ({ column }) => {
  return (
    <View style={styles.column}>
      <View style={styles.wrapper}>
        <View style={styles.columnHeader}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {column.title}
          </Text>
          <View style={styles.badge}>
            <Text style={{ fontSize: 12 }}>{column.cards.length}</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={column.cards}
            renderItem={({ item }) => (
              <View style={styles.card} key={item.id}>
                <Text style={{ fontSize: 14 }}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.columnFooter}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KanbanColumn;

const styles = StyleSheet.create({
  column: {
    width: 300,
    height: windowHeight / 1.05,
    backgroundColor: "#eee",
    borderRadius: 5,
    margin: 10,
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  columnHeader: {
    marginBottom: 10,
    flexDirection: "row",
  },
  badge: {
    backgroundColor: "#f00",
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
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
    elevation: 5,
  },
  columnFooter: {
    padding: 15,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
});
