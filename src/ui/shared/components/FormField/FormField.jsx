import { useTranslate } from 'hooks/useTranslate';
import { Field, Input } from './FormField.styled';

export const FormField = ({ label, inputType }) => {
    const { t } = useTranslate();
    return (
        <Field>
            {t(label)}
            <Input type={inputType} />
        </Field>
    );
};
