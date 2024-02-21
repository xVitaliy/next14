import { Divider, Stack, Typography } from '@mui/material';
import { ThemeSwitcher } from '@/components';

export const Header = () => {
  return (
    <Stack>
      <Stack flex={1} direction={'row'} p={2} alignItems={'center'}>
        <Typography>Header</Typography>
        <Stack ml={'auto'}>
          <ThemeSwitcher />
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
};
