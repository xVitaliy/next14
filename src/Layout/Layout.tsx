import { Stack } from '@mui/material';
import { ReactNode } from 'react';
import { Wrapper } from '@/Layout/Layout.styled';
import { Footer, Header } from '@/components';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Stack flex={1} p={2}>
        {children}
      </Stack>
      <Footer />
    </Wrapper>
  );
};
