import { Todo } from "types";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

type TodoListItemProps = {
  todo: Todo;
  handleSuccess: (id: number) => void;
  handleDelete: (id: number) => void;
};

const TodoListItem = ({
  todo,
  handleSuccess,
  handleDelete,
}: TodoListItemProps) => {
  const clickSuccess = () => {
    handleSuccess(todo.id);
  };
  const ClickDelete = () => {
    handleDelete(todo.id);
  };
  return (
    <TodoListItemContainer>
      <Form.Check
        type="checkbox"
        label={todo.text}
        checked={todo.isComplete}
        onChange={clickSuccess}
      />
      <Button onClick={ClickDelete}>Delete</Button>
    </TodoListItemContainer>
  );
};

export default TodoListItem;

const TodoListItemContainer = styled.div`
  // 100% 너비에 요소들이 가장자리에 배치되도록 설정
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;

  input {
    margin-right: 10px;
  }
  button {
    margin-left: 10px;
  }
`;
