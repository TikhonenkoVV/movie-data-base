import React, { useEffect, useState } from 'react';
import {
    DivStyled,
    BtnSelectStyled,
    DivListStyled,
    UlListStyled,
    LiStyled,
} from './Select.styled';

export const Select = ({ initial, onChange }) => {
    const [currVal, setCurrVal] = useState('All');
    const [isOpen, setIsOpen] = useState(false);

    const [options, setOptions] = useState([
        { all: 'All' },
        { movie: 'Movie' },
        { tv: 'Tv' },
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
        if (initial?.options) setOptions(initial.options);
    }, [initial]);

    return (
        <DivStyled>
            <BtnSelectStyled isOpen={isOpen} onClick={handleClick}>
                {currVal ? currVal : 'Theme'}
            </BtnSelectStyled>

            <DivListStyled isOpen={isOpen} onClick={e => e.stopPropagation()}>
                <UlListStyled>
                    {options?.map(el => (
                        <LiStyled
                            data-id={Object.keys(el)}
                            key={Object.keys(el)}
                            onClick={handleChange}
                        >
                            {Object.values(el)}
                        </LiStyled>
                    ))}
                </UlListStyled>
            </DivListStyled>
        </DivStyled>
    );
};
