import React from 'react';
import '../styles/components/_styledButton.scss';
import { Button } from '@mui/material';

export default function StyledButton({ text, handleChange }) {
  return (
    <Button
      variant="outlined"
      classes={{ root: "styledButton-container" }}
      onClick={handleChange}
    >
      {text}
    </Button>
  );
}
