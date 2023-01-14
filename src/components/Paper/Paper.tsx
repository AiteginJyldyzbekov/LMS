import React from 'react';
import { styled } from '@mui/material/styles';
import MuiPaper, { PaperProps } from '@mui/material/Paper';

export const PaperStyled = styled((props: PaperProps) => (
  <MuiPaper {...props} />
))(() => ({
  width: '45%',
  background: '#2C2E34',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '12px',
  display: 'flex',
  justifyContent: 'center',
}));
