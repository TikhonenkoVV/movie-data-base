import { Select } from 'ui/shared/components/Select/Select';
import {
    StyledTogler,
    TogglerTitle,
    TrendsBtn,
    TrendsBtnWrapper,
} from './TrendsTogler.styled';
import { useTranslate } from 'hooks/useTranslate';

export const TrendsToggler = ({
    trands,
    onBtnDayClick,
    onBtnWeekClick,
    hendleSelectChange,
}) => {
    const { t } = useTranslate();
    return (
        <StyledTogler>
            <TogglerTitle>{t('trending')}</TogglerTitle>
            <TrendsBtnWrapper>
                <TrendsBtn
                    datatype="day"
                    className={trands === 'day' ? 'active' : ''}
                    type="button"
                    onClick={onBtnDayClick}
                >
                    {t('today')}
                </TrendsBtn>
                <TrendsBtn
                    className={trands === 'week' ? 'active' : ''}
                    type="button"
                    onClick={onBtnWeekClick}
                >
                    {t('week')}
                </TrendsBtn>
            </TrendsBtnWrapper>
            <Select onChange={hendleSelectChange} />
        </StyledTogler>
    );
};
