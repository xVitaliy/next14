import { NAVIGATIONS } from '@/constants';
import { Link as MUILink, Stack } from '@mui/material';
import Link from 'next/link';

export const Navigate = () => {
  return (
    <Stack direction={'row'} gap={'25px'}>
      {NAVIGATIONS.map(({ label, href }) => {
        return (
          <MUILink key={href} component={Link} href={href}>
            {label}
          </MUILink>
        );
      })}
    </Stack>
  );
};
