import { useDispatch, useSelector } from 'react-redux';
import { BtnWrapper, LangButton, Toggler } from './LangToggler.styled';
import { selectLang, selectVerifiedUser } from 'common/store/selector';
import { setLang } from 'common/store/auth/authSlice';
import sprite from 'ui/assets/images/sprite.svg';
import { Svg } from 'ui/shared/components/Svg/Svg';
import { useState } from 'react';

export const LangToggler = () => {
    const dispatch = useDispatch();
    const verifiedUser = useSelector(selectVerifiedUser);
    const lang = useSelector(selectLang);
    const [isOpen, setIsOpen] = useState(false);

    const toggleBtnWrapper = () => {
        setIsOpen(!isOpen);
    };

    const toggleLang = e => {
        toggleBtnWrapper();
        const lang = e.target.getAttribute('id');
        if (!verifiedUser) {
            dispatch(setLang(lang));
        }
    };

    return (
        <Toggler onClick={toggleBtnWrapper}>
            <Svg
                w={20}
                h={20}
                use={
                    lang === 'uk-UA'
                        ? `${sprite}#icon-flag-uk-ua`
                        : lang === 'en-US'
                        ? `${sprite}#icon-flag-en-uk`
                        : `${sprite}#icon-flag-de-de`
                }
            />

            <BtnWrapper className={isOpen && 'open'}>
                <LangButton
                    id="uk-UA"
                    onClick={toggleLang}
                    className={lang === 'uk-UA' && 'active'}
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-flag-uk-ua`} />
                    UA
                </LangButton>
                <LangButton
                    id="en-US"
                    onClick={toggleLang}
                    className={lang === 'en-US' && 'active'}
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-flag-en-uk`} />
                    UK
                </LangButton>
                <LangButton
                    id="de-DE"
                    onClick={toggleLang}
                    className={lang === 'de-DE' && 'active'}
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-flag-de-de`} />
                    DE
                </LangButton>
            </BtnWrapper>
        </Toggler>
    );
};
