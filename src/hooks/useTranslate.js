import { selectLang } from 'common/store/selector';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dictionaryEn, dictionaryUk } from 'ui/assets/languages/dictionary';

export const useTranslate = () => {
    const language = useSelector(selectLang);
    const [res, setRes] = useState(dictionaryEn);
    const label = '%&i%&';

    const t = (key, insert) => {
        let string = res[key];
        if (insert?.length > 0) {
            insert.forEach(el => {
                string = string.replace(label, el);
            });
        }
        return string;
    };

    useEffect(() => {
        if (language === 'en-US') setRes(dictionaryEn);
        if (language === 'uk-UA') setRes(dictionaryUk);
    }, [language]);

    return { t };
};
