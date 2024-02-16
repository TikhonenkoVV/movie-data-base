import { Select } from 'components/Select/Select';
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
            <TogglerTitle>Trending</TogglerTitle>
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
