import { setLang } from 'common/store/auth/authSlice';
import { selectLang } from 'common/store/selector';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    dictionaryDe,
    dictionaryEn,
    dictionaryUk,
} from 'ui/assets/languages/dictionary';

const defaultBrouserLanguage = navigator.language;

export const useTranslate = () => {
    const language = useSelector(selectLang);
    const [res, setRes] = useState();
    const label = '%&i%&';

    const dispatch = useDispatch();

    const t = (key, insert) => {
        if (res) {
            let string = res[key];
            if (insert?.length > 0) {
                insert.forEach(el => {
                    string = string.replace(label, el);
                });
            }
            return string;
        }
    };

    useEffect(() => {
        if (!language) {
            if (
                defaultBrouserLanguage === 'uk-UA' ||
                defaultBrouserLanguage === 'ru-UA'
            ) {
                dispatch(setLang('uk-UA'));
            } else dispatch(setLang('en-US'));
        }
    }, [dispatch, language]);

    useEffect(() => {
        if (!language) return;
        if (language === 'en-US') setRes(dictionaryEn);
        if (language === 'uk-UA') setRes(dictionaryUk);
        if (language === 'de-DE') setRes(dictionaryDe);
    }, [language]);

    return { t };
};
