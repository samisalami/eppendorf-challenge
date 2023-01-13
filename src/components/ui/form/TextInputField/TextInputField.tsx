import {TextInputFieldProps} from "./TextInputField.types";
import { Field } from 'react-final-form';
import {FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import React from 'react';


export const TextInputField = (props: TextInputFieldProps): JSX.Element => {
    return (
        <Field
            allowNull
            name={props.field}
            validate={props.validate}
            parse={(value) => (value === '' ? null : value)}
            render={({ input, meta }) => (
                <>
                    <FormControl
                        error={(!!meta.error) && meta.touched}
                    >
                        {props.label ? (
                            <InputLabel htmlFor={props.field} required={props.required}>
                                {props.label}
                            </InputLabel>
                        ) : (
                            ''
                        )}
                        <Input
                            id={props.field}
                            type={props.type ?? 'text'}
                            {...input}
                            value={input.value || ''}
                        />
                        {meta.error && meta.touched && (
                            <FormHelperText>
                                {meta.error}
                            </FormHelperText>
                        )}
                    </FormControl>
                </>
            )}
        />
    );
};
