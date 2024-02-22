'use client';
import { experimental_extendTheme as extendTheme } from '@mui/material';
// import { CSSProperties } from 'react';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { pink } from '@mui/material/colors';

export const theme = extendTheme({
  // typography: {
  //   allVariants: {
  //     color: 'red',
  //   },
  // },
  components: {
    MuiTypography: {
      // styleOverrides: {
      //   root: ({ theme }) => ({
      //     color: theme.vars.palette.blackWhite.main,
      //   }),
      // },
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        test: {
          main: '#14ff00',
        },
        whiteBlack: {
          main: '#fff',
        },
        blackWhite: {
          main: '#000000',
        },
        primary: {
          main: pink[600],
        },
      },
    },
    dark: {
      palette: {
        test: {
          main: '#fffd00',
        },
        whiteBlack: {
          main: '#000000',
        },
        blackWhite: {
          main: '#fff',
        },
        primary: {
          main: pink[400],
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    whiteBlack: Palette['primary'];
    blackWhite: Palette['primary'];
    test: Palette['primary'];
  }

  interface PaletteOptions {
    whiteBlack: PaletteOptions['primary'];
    blackWhite: PaletteOptions['primary'];
    test: PaletteOptions['primary'];
  }
}
