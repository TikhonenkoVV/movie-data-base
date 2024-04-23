import { useLayoutEffect, useState } from 'react';
import { darkTheme, lightTheme, theme } from '../ui/assets/styles';

export const useTheme = () => {
    const [currentTheme, setCurrentTheme] = useState({
        ...theme,
        ...darkTheme,
    });
    useLayoutEffect(() => {});
};
