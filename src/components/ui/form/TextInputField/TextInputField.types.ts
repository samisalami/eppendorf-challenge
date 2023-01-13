import {FieldValidator} from "final-form";

export type TextInputFieldProps = {
    type?: string;
    field: string;
    label?: string;
    validate?: FieldValidator<string|null>;
    required?: boolean;
};