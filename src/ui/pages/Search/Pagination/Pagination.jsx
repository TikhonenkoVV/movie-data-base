import {
    Dot,
    DotEnd,
    DotNext,
    DotPrev,
    DotStart,
    PaginationBox,
} from './Pagination.styled';
import sprite from '../../../assets/images/sprite.svg';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Svg } from 'ui/shared/components/Svg/Svg';

export const Pagination = ({ totalPages, serviceClass }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(null);
    const query = searchParams.get('query');

    useEffect(() => {
        const getCurrentPage = Number(searchParams.get('page'));
        setCurrentPage(getCurrentPage);
    }, [searchParams]);

    useEffect(() => {
        if (totalPages > 2) {
            let res = currentPage;
            if (currentPage === 1) res += 1;
            if (currentPage === totalPages) res -= 1;
            setPage(res);
        }
    }, [currentPage, totalPages]);

    const hendleClick = e => {
        const toPage = e.target.getAttribute('datatype');
        if (toPage !== currentPage) setSearchParams({ query, page: toPage });
    };

    return (
        <PaginationBox className={serviceClass}>
            {totalPages > 2 && (
                <DotStart
                    disabled={currentPage === 1}
                    datatype={1}
                    onClick={hendleClick}
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-double-arrow`} />
                </DotStart>
            )}
            {totalPages > 2 && (
                <DotPrev
                    disabled={currentPage === 1}
                    datatype={currentPage - 1}
                    onClick={hendleClick}
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-arrow`} />
                </DotPrev>
            )}
            {totalPages > 1 && (
                <Dot
                    aria-current={
                        totalPages === 2
                            ? currentPage === Number(page)
                            : currentPage === Number(page) - 1
                    }
                    onClick={hendleClick}
                    datatype={currentPage === 1 ? currentPage : currentPage - 1}
                >
                    {currentPage === 1 ? currentPage : currentPage - 1}
                </Dot>
            )}
            {totalPages > 1 && (
                <Dot
                    aria-current={
                        totalPages === 2
                            ? currentPage === Number(page) + 1
                            : currentPage === Number(page)
                    }
                    onClick={hendleClick}
                    datatype={
                        totalPages === 2
                            ? totalPages
                            : currentPage === 1
                            ? currentPage + 1
                            : currentPage === totalPages
                            ? currentPage - 1
                            : currentPage
                    }
                >
                    {totalPages === 2
                        ? totalPages
                        : currentPage === 1
                        ? currentPage + 1
                        : currentPage === totalPages
                        ? currentPage - 1
                        : currentPage}
                </Dot>
            )}
            {totalPages > 2 && (
                <Dot
                    aria-current={currentPage === Number(page) + 1}
                    onClick={hendleClick}
                    datatype={
                        currentPage === totalPages
                            ? currentPage
                            : currentPage === 1
                            ? currentPage + 2
                            : currentPage + 1
                    }
                >
                    {currentPage === totalPages
                        ? currentPage
                        : currentPage === 1
                        ? currentPage + 2
                        : currentPage + 1}
                </Dot>
            )}
            {totalPages > 2 && (
                <DotNext
                    disabled={currentPage === totalPages}
                    datatype={currentPage + 1}
                    onClick={hendleClick}
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-arrow`} />
                </DotNext>
            )}
            {totalPages > 2 && (
                <DotEnd
                    disabled={currentPage === totalPages}
                    onClick={hendleClick}
                    datatype={totalPages}
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-double-arrow`} />
                </DotEnd>
            )}
        </PaginationBox>
    );
};
