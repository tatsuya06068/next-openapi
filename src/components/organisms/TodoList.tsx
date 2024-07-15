"use client"
import React, {useEffect, useState} from 'react';
import TodoItem from '../molecules/TodoItem';
import { DefaultService, Todo, NewTodo, UpdateTodo} from '@/clientapi/generated-typescript-client';


interface TodoListProps {
    todos: Todo[];
}

const deleteTodo = async (id: number) => {
  await DefaultService.deleteTodos(id)
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [updatedTodos, setUpdatedTodos] = useState<Todo[]>(todos);

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id)
    const updatedTodoList = updatedTodos.filter(todo => todo.id !== id);
    console.log(updatedTodoList)
    setUpdatedTodos(updatedTodoList);
  };

  return (
    <div>
      <div>{updatedTodos.length}</div>
      { 
        updatedTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;