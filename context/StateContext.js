import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [state, setState] = useState({
    kanban: {
      columns: [
        {
          id: "1",
          title: "To Do",
          cards: [],
        },
        {
          id: "2",
          title: "In Progress",
          cards: [],
        },
        {
          id: "3",
          title: "Done",
          cards: [],
        },
      ],
    },
  });

  const fetchTodoData = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos");
    let todos = await fetchData.json();
    todos = todos.slice(0, 30);

    const newState = { ...state };

    todos.forEach((todo) => {
      if (todo.completed) {
        newState.kanban.columns[0].cards.push(todo);
      } else {
        newState.kanban.columns[1].cards.push(todo);
      }
    });

    console.log(newState);
    setState({ ...newState });
  };

  useEffect(() => {
    fetchTodoData();
  }, []);

  const addCard = (columnId, title) => {
    const newState = { ...state };
    const column = newState.kanban.columns.find(
      (column) => column.id === columnId
    );

    column.cards.push({
      id: `${column.cards.length + 1}`,
      title,
    });

    setState(newState);
  };

  const addColumn = (title) => {
    const newState = { ...state };
    newState.kanban.columns.push({
      id: `${newState.kanban.columns.length + 1}`,
      title,
      cards: [],
    });
    setState(newState);
  };

  return (
    <StateContext.Provider value={[state, setState, addCard, addColumn]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
