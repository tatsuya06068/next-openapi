import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder }) => (
  <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={styles.input} />
);

const styles = {
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  } as React.CSSProperties,
};

export default Input;