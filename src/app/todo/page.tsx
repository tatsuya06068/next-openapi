import React, {Suspense} from 'react';
import TodoList from '@/components/organisms/TodoList';
import TodoForm from '@/components/organisms/TodoForm';
import { DefaultService, Todo, NewTodo, UpdateTodo} from '@/clientapi/generated-typescript-client';


const fetchTodos = async (): Promise<Todo[]>  => {
  let todos: Todo[] = []
  // APIからTodoを取得
  await DefaultService.getTodos()
      .then((response) => {
        todos = response;
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
      console.log("test")
    
  return todos
};

// const handleAddTodo = async (title: string) => {
//     const newTodo = title as NewTodo
//     await DefaultService.postTodos(newTodo)
//   };

const TodoPage = async () => {
  const todos1 = await fetchTodos();

  return (
    <>
    <div style={styles.container}>
      <h1>Todo App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList todos={todos1} />
      </Suspense>
    </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  } as React.CSSProperties,
};

export default TodoPage;