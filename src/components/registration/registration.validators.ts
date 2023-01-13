export type validator = string | undefined;

export const composeValidatorErrors = (
    validated: (string | undefined)[]
): validator => {
    let errorMsg = '';
    validated.forEach((result) => (result ? (errorMsg = result) : null));
    return errorMsg || undefined;
};

export const isRequired = (
    value: string | number | null,
    errorMsg: string
): validator => {
    return !value ? errorMsg : undefined;
};

export const hasMinimumCharacters = (
    value: string | number | null,
    min: number,
    errorMsg: string
): validator => {
    return String(value)?.length < min ? errorMsg : undefined;
};

export const containsStrings = (
    value: number | string | null,
    characters: string[],
    errorMsg: string
): validator => {
    return !characters.every(needle => String(value).includes(needle)) ? errorMsg : undefined;
};

export const matchesRegexPatterns = (
    value: number | string | null,
    patterns: string[],
    errorMsg: string
): validator => {
    return !patterns.every(pattern => new RegExp(pattern).test(String(value))) ? errorMsg : undefined;
};