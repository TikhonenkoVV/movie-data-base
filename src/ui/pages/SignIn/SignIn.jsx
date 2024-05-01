import { Container } from 'ui/shared/layouts/Container/Container';
import { SignInForm } from './SignInForm/SignInForm';

const SignIn = () => {
    return (
        <section>
            <Container>
                <SignInForm />
            </Container>
        </section>
    );
};

export default SignIn;
