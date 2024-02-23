'use client';
import { Box, styled } from '@mui/material';

export const Div = styled(Box)(
  ({ theme }) => `
   border: 10px solid red;
  ${[theme.breakpoints.up('sm')]} {
    border: 10px solid yellow;
  }
`,
);
