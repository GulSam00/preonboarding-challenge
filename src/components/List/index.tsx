import { KeyboardEventHandler, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "store/store";
import { addTodo, checkTodo, deleteTodo } from "../../store/todosSlice";

import TodoListItem from "./TodoListItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styled from "styled-components";

const List = () => {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (todoText) {
      const todo = {
        id: todos.length + 1 + todoText,
        text: todoText,
        isComplete: false,
      };
      dispatch(addTodo(todo));
      setTodoText("");
    }
  };

  const handleKeyPress: KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleSuccess = (id: string) => {
    dispatch(checkTodo(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ListContainer>
      <ListHeader>
        <Form.Control
          type="text"
          placeholder="Enter a todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <Button variant="light" onClick={handleAddTodo}>
          Submit
        </Button>
      </ListHeader>
      <ListBody>
        {todos.map((todo, index) => (
          <TodoListItem
            key={index}
            todo={todo}
            handleSuccess={handleSuccess}
            handleDelete={handleDelete}
          />
        ))}
      </ListBody>
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;

  > * {
    margin: 0.5rem;
    padding: 1rem;
  }

  input {
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  button:active {
    background-color: #f8f9fa;
  }
`;

const ListBody = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  div {
    margin-bottom: 10px;
  }
`;
