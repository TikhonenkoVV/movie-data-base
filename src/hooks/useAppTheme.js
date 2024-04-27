import { useEffect, useState } from 'react';
import { darkTheme, lightTheme, theme } from '../ui/assets/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'common/store/selector';
import { setTheme } from 'common/store/auth/authSlice';

const isDarkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkMode ? 'dark' : 'light';

export const useAppTheme = () => {
    const selectedTheme = useSelector(selectTheme);
    const [currentTheme, setCurrentTheme] = useState({
        ...theme,
        ...darkTheme,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTheme(selectedTheme || defaultTheme));
    }, [dispatch, selectedTheme]);

    useEffect(() => {
        if (selectedTheme === 'dark') {
            setCurrentTheme({
                ...theme,
                ...darkTheme,
            });
        } else {
            setCurrentTheme({
                ...theme,
                ...lightTheme,
            });
        }
    }, [selectedTheme]);

    return { currentTheme };
};
