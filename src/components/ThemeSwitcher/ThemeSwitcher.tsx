'use client';
import Switch from '@mui/material/Switch';
import { useColorScheme } from '@mui/material';
import { memo, useEffect, useState } from 'react';

export const ThemeSwitcher = memo(() => {
  const { mode, setMode } = useColorScheme();
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    setIsChecked(mode === 'dark');
  }, [mode]);

  return <Switch checked={isChecked} onChange={handleChange} />;
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
