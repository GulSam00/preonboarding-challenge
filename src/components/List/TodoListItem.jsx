import React from "react";

import styled from "styled-components";

const TodoListItem = ({ todo, handleSuccess, handleDelete }) => {
  const ClickDelete = () => {
    handleDelete(todo.id);
  };
  return (
    <TodoListItemContainer>
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={handleSuccess}
      />
      <span>{todo.text}</span>
      <button onClick={ClickDelete}>Delete</button>
    </TodoListItemContainer>
  );
};

export default TodoListItem;

const TodoListItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  input {
    margin-right: 10px;
  }
  button {
    margin-left: 10px;
  }
`;
