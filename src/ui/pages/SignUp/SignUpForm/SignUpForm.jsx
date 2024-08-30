import { useTranslate } from 'hooks/useTranslate';
import {
    FormFieldBox,
    SinInButton,
    SubmitButton,
    SubTitle,
    Title,
} from './SignUpForm.styled';
import { FormField } from 'ui/shared/components/FormField/FormField';
import { AuthForm } from 'ui/shared/components/AuthForm/AuthForm';

export const SignUpForm = () => {
    const { t } = useTranslate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit sign up');
    };

    return (
        <>
            <Title>{t('createAccount')}</Title>
            <AuthForm handleSubmit={handleSubmit}>
                <FormFieldBox>
                    <FormField label={'userName'} />
                    <FormField label={'userEMail'} />
                    <FormField label={'userPass'} inputType={'password'} />
                    <FormField
                        label={'userPassConfirm'}
                        inputType={'password'}
                    />
                </FormFieldBox>
                <SubmitButton type="submit">{t('submit')}</SubmitButton>
            </AuthForm>
            <SubTitle>{t('haveAccaunt')}</SubTitle>
            <SinInButton to={'/auth/signin'}>{t('login')}</SinInButton>
        </>
    );
};
