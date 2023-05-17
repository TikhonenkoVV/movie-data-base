import {
    Dot,
    DotEnd,
    DotNext,
    DotPrev,
    DotStart,
    PaginationBox,
} from './Pagination.styled';
import sprite from '../../images/sprite.svg';
import { Svg } from 'components/Icon/Icon';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Pagination = ({ totalPages }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const query = searchParams.get('query');

    useEffect(() => {
        const p = Number(searchParams.get('page'));
        let res = p;
        if (p === 1) res = p + 1;
        if (p === totalPages) res = p - 1;
        setPage(res);
    }, [searchParams, totalPages]);

    const hendleClick = e => {
        const toPage = e.target.getAttribute('datatype');
        setSearchParams({ query, page: toPage });
    };

    return (
        <PaginationBox>
            {totalPages > 3 && (
                <DotStart datatype={1} onClick={hendleClick}>
                    <Svg use={`${sprite}#arrow-start`} />
                </DotStart>
            )}
            {totalPages > 3 && (
                <DotPrev>
                    <Svg use={`${sprite}#arrow-prev`} />
                </DotPrev>
            )}
            {totalPages > 1 && (
                <Dot onClick={hendleClick} datatype={Number(page) - 1}>
                    {Number(page) - 1}
                </Dot>
            )}
            {totalPages > 1 && (
                <Dot onClick={hendleClick} datatype={Number(page)}>
                    {Number(page)}
                </Dot>
            )}
            {totalPages > 2 && (
                <Dot onClick={hendleClick} datatype={Number(page) + 1}>
                    {Number(page) + 1}
                </Dot>
            )}
            {totalPages > 3 && (
                <DotNext>
                    <Svg use={`${sprite}#arrow-next`} />
                </DotNext>
            )}
            {totalPages > 3 && (
                <DotEnd onClick={hendleClick} datatype={totalPages}>
                    <Svg use={`${sprite}#arrow-end`} />
                </DotEnd>
            )}
        </PaginationBox>
    );
};
