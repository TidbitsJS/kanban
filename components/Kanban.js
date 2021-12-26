import React from "react";
import { Board, BoardRepository } from "react-native-draganddrop-board";
import {
  ActivityIndicator,
  Dimensions,
  View,
  Text,
  StyleSheet,
} from "react-native";

const windowHeight = Dimensions.get("window").height;

const data = [
  {
    id: 1,
    name: "TO DO",
    rows: [],
  },
  {
    id: 2,
    name: "IN PROGRESS",
    rows: [],
  },
  {
    id: 3,
    name: "DONE",
    rows: [],
  },
];

const Kanban = () => {
  const [todoData, setTodoData] = React.useState(null);
  const [boardRepository] = React.useState(new BoardRepository(data));

  const fetchTodoData = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos");
    let todos = await fetchData.json();
    todos = todos.slice(0, 10);

    todos.forEach((todo) => {
      if (todo.completed) {
        data[0].rows.push(todo);
      } else {
        data[1].rows.push(todo);
      }
    });

    setTodoData(data);
  };

  React.useEffect(() => {
    fetchTodoData();
  }, []);

  if (!todoData) {
    return <ActivityIndicator size="large" color="red" />;
  }

  boardRepository.updateData(todoData);

  return (
    <Board
      boardRepository={boardRepository}
      open={() => {}}
      onDragEnd={(board) => {
        console.log(board);
      }}
      boardBackground="#fff"
      columnHeight={windowHeight}
      cardContent={(item) => (
        <View style={styles.card}>
          <Text style={styles.cardText}>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default Kanban;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 14,
    textTransform: "capitalize",
  },
});
