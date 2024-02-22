'use client';
import Switch from '@mui/material/Switch';
import { useColorScheme } from '@mui/material';
import { memo, useEffect, useState } from 'react';

export const ThemeSwitcher = memo(() => {
  const { mode, setMode } = useColorScheme();
  const [isChecked, setIsChecked] = useState(true);

  // const emojiCodePoints = ['1F1FA', '1F1E6'];
  // const t = emojiCodePoints.map((code) => parseInt(code, 16));
  // const emoji = String.fromCodePoint(...[127482, 127462]);
  //
  // console.log('t', t, emoji);

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
