import React, { useEffect, useState } from 'react';
import {
    DivStyled,
    BtnSelectStyled,
    DivListStyled,
    LiStyled,
} from './Select.styled';
import { useTranslate } from 'hooks/useTranslate';

export const Select = ({ initial, onChange }) => {
    const { t } = useTranslate();

    const [currVal, setCurrVal] = useState(t.all);
    const [isOpen, setIsOpen] = useState(false);

    const [options, setOptions] = useState([
        { all: t('all') },
        { movie: t('movies') },
        { tv: t('tv') },
    ]);

    const handleChange = event => {
        event.stopPropagation();
        setCurrVal(event.target.innerText);
        onChange(event.target.getAttribute('data-id'));
        setIsOpen(false);
    };

    const handleClick = event => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener('click', () => setIsOpen(false));
        return () => {
            window.removeEventListener('click', () => setIsOpen(false));
        };
    }, []);

    useEffect(() => {
        if (initial?.options) setOptions(initial.options);
    }, [initial]);

    return (
        <DivStyled>
            <BtnSelectStyled isOpen={isOpen} onClick={handleClick}>
                {currVal ? currVal : t('all')}
            </BtnSelectStyled>

            <DivListStyled isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <ul>
                    {options?.map(el => (
                        <LiStyled
                            data-id={Object.keys(el)}
                            key={Object.keys(el)}
                            onClick={handleChange}
                        >
                            {Object.values(el)}
                        </LiStyled>
                    ))}
                </ul>
            </DivListStyled>
        </DivStyled>
    );
};
