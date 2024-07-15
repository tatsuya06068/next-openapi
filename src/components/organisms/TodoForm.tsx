import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

interface TodoFormProps {
  // text: string;
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ text, onAdd }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <Input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new todo" />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  } as React.CSSProperties,
};

export default TodoForm;