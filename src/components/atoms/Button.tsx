"use client"
import React from 'react';
import styles from '@/styles/components/atoms/Button.module.css';

interface ButtonProps {
    fontSize?: string;
    color?: string;
    backgroundColor?: string;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
  }

  const Button: React.FC<ButtonProps> = ({
    children,
    fontSize = '16px',
    color = 'white',
    backgroundColor = 'blue',
    type = 'button',
    onClick,
  }) => {
    const buttonStyle: React.CSSProperties = {
      fontSize,
      color,
      backgroundColor,
    };
  return (
    <button type={type} className={styles.button} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;