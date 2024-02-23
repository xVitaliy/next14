// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, styled, SxProps, Theme } from '@mui/material';
import { Div } from './Test.styled';

// const testSX: SxProps<Theme> = {
// border: '10px solid',
// borderColor: 'red',
// theme => theme.breakpoints.up('sm')
// };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testSX: SxProps<Theme> = [
  {
    border: '10px solid',
    borderColor: {
      xs: 'red', // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
      md: 'yellow',
    },
    p: {
      xs: 1, // [theme.breakpoints.up('xs')]: { padding: theme.spacing(1) }
      md: 10,
    },
  },
];

export default function Test() {
  // return <Box sx={testSX}>123</Box>;
  return <Div>123</Div>;
}
