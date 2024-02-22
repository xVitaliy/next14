import { Divider, Stack, Typography } from '@mui/material';
import { ThemeSwitcher } from '@/components';
import { Navigate } from '@/components/Navigate/Navigate';
import { innerSX } from '@/components/Header/Header.styled';

export const Header = () => {
  return (
    <Stack>
      <Stack sx={innerSX}>
        <Typography color={'primary.main'}>Header</Typography>
        <Navigate />
        <Stack>
          <ThemeSwitcher />
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};
