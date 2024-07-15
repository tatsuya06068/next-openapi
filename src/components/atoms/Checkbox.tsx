import React from 'react';

interface CheckboxProps {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({checked}) => (
  <input type="checkbox" checked={checked} style={styles.checkbox} />
);

const styles = {
  checkbox: {
    marginRight: '10px',
  } as React.CSSProperties,
};

export default Checkbox;