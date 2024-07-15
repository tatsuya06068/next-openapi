"use client"
import { useEffect, useState } from 'react';
import { DefaultService, Todo} from '../clientapi/generated-typescript-client';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);


  useEffect(() => {

    // OpenAPI.BASE="http::localhost:4002/";

    DefaultService.getTodos()
      .then((response) => {
        setTodos(response);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.id} : {todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;