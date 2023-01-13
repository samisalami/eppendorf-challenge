export type RegistrationFormDto = {
    name: string;
    email: string;
    password: string;
}

export const makeRegistrationFormDto = (): RegistrationFormDto => ({
    name: '',
    email: '',
    password: ''
});