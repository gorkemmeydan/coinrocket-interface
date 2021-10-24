import React, { useState } from 'react';

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { boolean } from 'yup/lib/locale';

import * as S from './color-theme-switch.styled';

const ColorThemeSwitch: React.FC = () => {
  //TODO: get state from store
  const [isNightTheme, setNightTheme] = useState(true);

  const iconSize = '30';

  return (
    <S.ColorThemeSwitchWrapper onClick={() => setNightTheme(!isNightTheme)}>
      {isNightTheme ? (
        <BsFillMoonStarsFill size={iconSize} />
      ) : (
        <BsFillSunFill size={iconSize} />
      )}
    </S.ColorThemeSwitchWrapper>
  );
};

export default ColorThemeSwitch;
