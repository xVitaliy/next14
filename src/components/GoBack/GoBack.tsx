'use client';

import { useRouter } from 'next/navigation';
import { IconButton, Typography } from '@mui/material';
import { iconBtnSX } from '@/components/GoBack/GoBack.styled';

export const GoBack = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <IconButton onClick={goBack} sx={iconBtnSX}>
      <Typography color={'primary.main'}>Back</Typography>
    </IconButton>
  );
};
