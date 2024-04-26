import { useLayoutEffect, useState } from 'react';
import { darkTheme, lightTheme, theme } from '../ui/assets/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'common/store/selector';
import { setTheme } from 'common/store/auth/authSlice';

const isDarkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches;

export const useTheme = () => {
    const selectedTheme = useSelector(selectTheme);
    const [currentTheme, setCurrentTheme] = useState();

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if (!selectedTheme) {
            if (isDarkMode) {
                dispatch(setTheme('dark'));
            } else dispatch(setTheme('light'));
        }
    }, [dispatch]);

    useLayoutEffect(() => {
        if (selectedTheme === 'dark') {
            setCurrentTheme({
                ...theme,
                ...darkTheme,
            });
        } else
            setCurrentTheme({
                ...theme,
                ...lightTheme,
            });
    }, [selectedTheme]);

    return { currentTheme, setCurrentTheme };
};
