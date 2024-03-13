import {
    Dot,
    DotEnd,
    DotNext,
    DotPrev,
    DotStart,
    PaginationBox,
} from './Pagination.styled';
import sprite from '../../images/sprite.svg';
import { Svg } from 'components/Svg/Svg';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Pagination = ({ totalPages, serviceClass }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const query = searchParams.get('query');
    const currentPage = Number(searchParams.get('page'));

    useEffect(() => {
        let res = currentPage;
        if (currentPage === 1) res = currentPage + 1;
        if (currentPage === totalPages) res = currentPage - 1;
        setPage(res);
    }, [currentPage, totalPages]);

    const hendleClick = e => {
        const toPage = e.target.getAttribute('datatype');
        setSearchParams({ query, page: toPage });
    };

    return (
        <PaginationBox className={serviceClass}>
            {totalPages > 3 && (
                <DotStart
                    disabled={currentPage === 1}
                    datatype={1}
                    onClick={hendleClick}
                >
                    <Svg w={20} h={20} use={`${sprite}#arrow-start`} />
                </DotStart>
            )}
            {totalPages > 3 && (
                <DotPrev
                    disabled={currentPage === 1}
                    datatype={Number(page) - 1}
                    onClick={hendleClick}
                >
                    <Svg w={20} h={20} use={`${sprite}#arrow-prev`} />
                </DotPrev>
            )}
            {totalPages > 1 && (
                <Dot
                    aria-current={currentPage === Number(page) - 1}
                    onClick={hendleClick}
                    datatype={Number(page) - 1}
                >
                    {Number(page) - 1}
                </Dot>
            )}
            {totalPages > 1 && (
                <Dot
                    aria-current={currentPage === Number(page)}
                    onClick={hendleClick}
                    datatype={Number(page)}
                >
                    {Number(page)}
                </Dot>
            )}
            {totalPages > 2 && (
                <Dot
                    aria-current={currentPage === Number(page) + 1}
                    onClick={hendleClick}
                    datatype={Number(page) + 1}
                >
                    {Number(page) + 1}
                </Dot>
            )}
            {totalPages > 3 && (
                <DotNext
                    disabled={currentPage === totalPages}
                    datatype={Number(page) + 1}
                    onClick={hendleClick}
                >
                    <Svg w={20} h={20} use={`${sprite}#arrow-next`} />
                </DotNext>
            )}
            {totalPages > 3 && (
                <DotEnd
                    disabled={currentPage === totalPages}
                    onClick={hendleClick}
                    datatype={totalPages}
                >
                    <Svg w={20} h={20} use={`${sprite}#arrow-end`} />
                </DotEnd>
            )}
        </PaginationBox>
    );
};
