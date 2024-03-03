import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
    max-width: 320px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
`;

export const Input = styled.input`
    width: 100%;
    height: 50px;
    padding-left: 10px;
    padding-right: 50px;
    background-color: transparent;
    outline: none;
    color: ${({ theme }) => theme.colors.themeText};
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light};
    transition: color ${({ theme }) => theme.baseTransition};
`;

export const BtnSearch = styled.button`
    width: 50px;
    height: 50px;

    font-size: 20px;
    font-weight: bold;
    color: #fff;

    position: absolute;
    top: 0;
    right: 0;
`;
