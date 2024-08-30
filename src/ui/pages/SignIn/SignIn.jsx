import { FormContainer } from 'ui/shared/layouts/FormContainer/FormContainer';
import { SignInForm } from './SignInForm/SignInForm';

const SignIn = () => {
    return (
        <section>
            <FormContainer>
                <SignInForm />
            </FormContainer>
        </section>
    );
};

export default SignIn;
