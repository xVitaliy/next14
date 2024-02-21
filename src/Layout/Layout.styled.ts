'use client';
import { Stack, styled } from '@mui/material';

export const Wrapper = styled(Stack)(
  ({
    theme: {
      vars: {
        palette: { whiteBlack, blackWhite },
      },
    },
  }) => ({
    minHeight: '100dvh',
    background: whiteBlack.main,
    color: blackWhite.main,
  }),
);
