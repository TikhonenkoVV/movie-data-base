import { Select } from 'ui/Layout/globalComponents/components/Select/Select';
import {
    StyledTogler,
    TogglerTitle,
    TrendsBtn,
    TrendsBtnWrapper,
} from './TrendsTogler.styled';

export const TrendsToggler = ({
    trands,
    onBtnDayClick,
    onBtnWeekClick,
    hendleSelectChange,
}) => {
    return (
        <StyledTogler>
            <TogglerTitle>Top 20 Trending</TogglerTitle>
            <TrendsBtnWrapper>
                <TrendsBtn
                    datatype="day"
                    className={trands === 'day' ? 'active' : ''}
                    type="button"
                    onClick={onBtnDayClick}
                >
                    today
                </TrendsBtn>
                <TrendsBtn
                    className={trands === 'week' ? 'active' : ''}
                    type="button"
                    onClick={onBtnWeekClick}
                >
                    this week
                </TrendsBtn>
            </TrendsBtnWrapper>
            <Select onChange={hendleSelectChange} />
        </StyledTogler>
    );
};
