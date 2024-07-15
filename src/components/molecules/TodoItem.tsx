import React from 'react';
import Checkbox from '../atoms/Checkbox';
import { Todo } from '@/clientapi/generated-typescript-client';


interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => (
  <div style={styles.todoItem}>
    <Checkbox checked={todo.completed ? true : false} />
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
    <button onClick={() => onDelete(todo.id)} style={styles.deleteButton}>Delete</button>
  </div>
);

const styles = {
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  } as React.CSSProperties,
  deleteButton: {
    marginLeft: 'auto',
    padding: '5px 10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  } as React.CSSProperties,
};

export default TodoItem;