import { Divider, Stack, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Stack>
      <Divider />
      <Stack flex={1} direction={'row'} p={2}>
        <Typography>Footer</Typography>
      </Stack>
    </Stack>
  );
};
