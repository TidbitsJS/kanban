import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useStateContext } from "../context/StateContext";
import KanbanColumn from "./KanbanColumn";

const CustomKanban = () => {
  const { state } = useStateContext();

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ padding: 5 }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {state.kanban.columns.map((column) => {
        return <KanbanColumn key={column.title + column.id} column={column} />;
      })}
    </ScrollView>
  );
};

export default CustomKanban;

const styles = StyleSheet.create({});
