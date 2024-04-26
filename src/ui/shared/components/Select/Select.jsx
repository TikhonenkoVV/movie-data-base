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

    const [currVal, setCurrVal] = useState(initial.default);
    const [isOpen, setIsOpen] = useState(false);
    const [initialState, setInitialState] = useState();

    const [options] = useState(initial.options);

    useEffect(() => {
        let obj = {};
        initial.options.map(el => {
            return (obj[Object.keys(el)[0]] = Object.values(el)[0]);
        });
        setInitialState(obj);
    }, [initial]);

    const handleChange = event => {
        event.stopPropagation();
        const dataId = event.target.getAttribute('data-id');
        setCurrVal(initialState[dataId]);
        onChange(dataId);
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

    return (
        <DivStyled>
            <BtnSelectStyled isOpen={isOpen} onClick={handleClick}>
                {t(currVal)}
            </BtnSelectStyled>

            <DivListStyled isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <ul>
                    {options?.map(el => (
                        <LiStyled
                            data-id={Object.keys(el)[0]}
                            key={Object.keys(el)[0]}
                            onClick={handleChange}
                        >
                            {t(Object.values(el))}
                        </LiStyled>
                    ))}
                </ul>
            </DivListStyled>
        </DivStyled>
    );
};
