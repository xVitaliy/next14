import { Divider, Stack, Typography } from '@mui/material';
import { innerSX } from '@/components/Footer/Footer.styled';

export const Footer = () => {
  return (
    <Stack>
      <Divider />
      <Stack sx={innerSX}>
        <Typography color={'primary.main'}>Footer</Typography>
      </Stack>
    </Stack>
  );
};
