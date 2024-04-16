import { useSelector } from 'react-redux';
import { Select } from 'ui/shared/components/Select/Select';
import {
    StyledTogler,
    TogglerTitle,
    TrendsBtn,
    TrendsBtnWrapper,
} from './TrendsTogler.styled';
import { selectDictionary } from 'common/store/selector';

export const TrendsToggler = ({
    trands,
    onBtnDayClick,
    onBtnWeekClick,
    hendleSelectChange,
}) => {
    const { trending, today, week } = useSelector(selectDictionary);
    return (
        <StyledTogler>
            <TogglerTitle>{trending}</TogglerTitle>
            <TrendsBtnWrapper>
                <TrendsBtn
                    datatype="day"
                    className={trands === 'day' ? 'active' : ''}
                    type="button"
                    onClick={onBtnDayClick}
                >
                    {today}
                </TrendsBtn>
                <TrendsBtn
                    className={trands === 'week' ? 'active' : ''}
                    type="button"
                    onClick={onBtnWeekClick}
                >
                    {week}
                </TrendsBtn>
            </TrendsBtnWrapper>
            <Select onChange={hendleSelectChange} />
        </StyledTogler>
    );
};
