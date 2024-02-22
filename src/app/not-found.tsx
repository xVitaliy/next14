'use client';

import { Button, Stack, SxProps, Theme } from '@mui/material';
import { useRouter } from 'next/navigation';

const WrapperSX: SxProps<Theme> = {
  // color: (theme) => {
  //   return theme.vars.palette.primary.main;
  // },
  color: 'primary.main',
  m: 'auto',
  alignItems: 'center',
};

export default function NotFound() {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };
  return (
    <Stack sx={WrapperSX}>
      <h1>404 - Page Not Found</h1>
      <Stack width={200}>
        <Button onClick={goHome}>Go home</Button>
      </Stack>
    </Stack>
  );
}
