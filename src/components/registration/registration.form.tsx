import React, {FC, useState} from "react";
import {Form} from 'react-final-form';
import {TextInputField} from "../ui/form/TextInputField/TextInputField";
import {makeRegistrationFormDto, RegistrationFormDto} from "./registration.types";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Button} from "@mui/material";
import {
    composeValidatorErrors,
    containsStrings,
    hasMinimumCharacters,
    isRequired,
    matchesRegexPatterns
} from "./registration.validators";
import {FormApi} from "final-form";

export const RegistrationForm: FC = () => {
    const [registrationData, setRegistrationData] = useState<RegistrationFormDto>(makeRegistrationFormDto());

    const handleSubmit = (values: RegistrationFormDto, form: FormApi<RegistrationFormDto>) => {
        alert('Success!');
    };

    return (
        <Form<RegistrationFormDto>
            initialValues={registrationData}
            onSubmit={(values, form) => handleSubmit(values, form)}
            render={({handleSubmit, form}) => (
                <Grid2 xs={12} textAlign={'center'} mt={3} container spacing={3} alignItems={'center'}>
                        <Grid2 xs={2}>
                            <TextInputField
                                label={'Name'}
                                field={'name'}
                                validate={(value) => composeValidatorErrors([
                                    isRequired(value, 'Please enter a name'),
                                    hasMinimumCharacters(value, 2, 'Please enter more than 2 characters')
                                ])}
                            />
                        </Grid2>
                        <Grid2 xs={2}>
                            <TextInputField
                                label={'E-Mail'}
                                field={'email'}
                                validate={(value) => composeValidatorErrors([
                                    isRequired(value, 'Please enter an e-mail'),
                                    containsStrings(value, ['@', '.'], 'Please enter a valid e-mail')
                                ])}
                            />
                        </Grid2>
                        <Grid2 xs={2}>
                            <TextInputField
                                label={'Password'}
                                field={'password'}
                                type={'password'}
                                validate={(value) => composeValidatorErrors([
                                    isRequired(value, 'Please enter an password'),
                                    hasMinimumCharacters(value, 8,'Your password should have at least 8 characters.'),
                                    matchesRegexPatterns(value, ['^(?=.*[!@#$%^&*])', '^(?=.*[0-9])', '^(?=.*[A-Z])'], 'Your password should have one special character, one upper case letter and a number.')
                                ])}
                            />
                        </Grid2>
                        <Grid2 xs={12}>
                            <Button variant={'contained'} onClick={()=>handleSubmit()}>Submit</Button><br/>
                        </Grid2>
                </Grid2>
            )}
        />
    );
}