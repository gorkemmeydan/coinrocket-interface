import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import * as S from './ColorThemeSwitch.styled';

const ColorThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const iconSize = '30';

  return (
    <S.ColorThemeSwitchWrapper onClick={() => toggleTheme()}>
      {theme === ('dark' || 'system') ? (
        <BsFillMoonStarsFill size={iconSize} />
      ) : (
        <BsFillSunFill style={{ color: 'black' }} size={iconSize} />
      )}
    </S.ColorThemeSwitchWrapper>
  );
};

export default ColorThemeSwitch;
