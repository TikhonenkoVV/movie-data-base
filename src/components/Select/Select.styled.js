import styled from '@emotion/styled';

export const DivStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.themeText};
    transition: color ${({ theme }) => theme.baseTransition};
    cursor: pointer;
    z-index: 3;
`;

export const BtnSelectStyled = styled.button`
    padding-left: 5px;
    padding-right: 20px;
    border: none;
    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        border: 1px solid ${({ theme }) => theme.colors.themeText};
        border-width: 0 2px 2px 0;
        padding: 3px;
        transform: translateY(${({ isOpen }) => (!isOpen ? '-80%' : '-30%')})
            rotate(${({ isOpen }) => (!isOpen ? '45deg' : '-135deg')});
        transition: transform 250ms;
        cursor: pointer;
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
`;

export const DivListStyled = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    border-radius: 8px;
    padding: 18px;
    margin: 0;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    transform: ${props => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
    transform-origin: top;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: ${props => (props.isOpen ? '1' : '0')};
    box-shadow: ${props => props.theme.colors.boxShadowSelector};
    border: 1px solid ${props => props.theme.colors.borderSelectorColor};
`;

export const UlListStyled = styled.ul`
    padding: 0;
    margin: 0;
`;

export const LiStyled = styled.li`
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    color: ${props => props.theme.colors.textSelectorColor};

    &:hover {
        color: ${props => props.theme.colors.hoverSelectorColor};
    }
`;
