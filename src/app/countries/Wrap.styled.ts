'use client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Stack, styled } from '@mui/material';

export const Wrap = styled(Stack)(
  ({ theme }) => `
   border: 10px solid red;
  ${[theme.breakpoints.up('sm')]} {
    border: 10px solid yellow;
  }
`,
);
