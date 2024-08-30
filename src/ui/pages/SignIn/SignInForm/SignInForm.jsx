import { useTranslate } from 'hooks/useTranslate';
import {
    FormFieldBox,
    SinUpButton,
    SubmitButton,
    SubTitle,
    Title,
} from './SignInForm.styled';
import { FormField } from 'ui/shared/components/FormField/FormField';
import { AuthForm } from 'ui/shared/components/AuthForm/AuthForm';

export const SignInForm = () => {
    const { t } = useTranslate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit sign in');
    };
    return (
        <>
            <Title>{t('continue')}</Title>
            <AuthForm handleSubmit={handleSubmit}>
                <FormFieldBox>
                    <FormField label={'userEMail'} />
                    <FormField label={'userPass'} inputType={'password'} />
                </FormFieldBox>
                <SubmitButton type="submit">{t('submit')}</SubmitButton>
            </AuthForm>
            <SubTitle>{t('noAccaunt')}</SubTitle>
            <SinUpButton to={'/auth/signup'}>{t('signUp')}</SinUpButton>
        </>
    );
};
