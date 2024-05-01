import { useTranslate } from 'hooks/useTranslate';
import { Field, Input, StyledForm, SubmitButton } from './SignUpForm.styled';

export const SignUpForm = () => {
    const { t } = useTranslate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit');
    };
    return (
        <StyledForm onSubmit={handleSubmit}>
            <Field>
                {t('userName')}
                <Input />
            </Field>
            <Field>
                {t('userEMail')}
                <Input />
            </Field>
            <Field>
                {t('userPass')}
                <Input />
            </Field>
            <Field>
                {t('userPassConfirm')}
                <Input />
            </Field>
            <SubmitButton type="submit">{t('submit')}</SubmitButton>
        </StyledForm>
    );
};
