import { useTranslate } from 'hooks/useTranslate';
import {
    Field,
    Input,
    SinUpButton,
    StyledForm,
    SubmitButton,
} from './SignInForm.styled';

export const SignInForm = () => {
    const { t } = useTranslate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit');
    };
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <Field>
                    {t('userEMail')}
                    <Input />
                </Field>
                <Field>
                    {t('userPass')}
                    <Input />
                </Field>
                <SubmitButton type="submit">{t('submit')}</SubmitButton>
            </StyledForm>
            <p>{t('noAccaunt')}</p>
            <SinUpButton to={'/auth/signup'}>{t('signUp')}</SinUpButton>
        </>
    );
};
