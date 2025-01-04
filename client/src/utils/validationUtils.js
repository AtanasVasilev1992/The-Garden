// Validation rules and messages
const VALIDATION_RULES = {
    title: {
        required: true,
        minLength: 3,
        maxLength: 50,
    },
    description: {
        required: true,
        minLength: 10,
        maxLength: 1000,
    },
    imageUrl: {
        required: true,
        pattern: /^https?:\/\/.+$/i,
    },
    email: {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
    password: {
        required: true,
        minLength: 4,
    },
    comment: {
        required: true,
        minLength: 2,
    }
};

const VALIDATION_MESSAGES = {
    required: field => `${field} is required`,
    minLength: (field, length) => `${field} must be at least ${length} characters`,
    maxLength: (field, length) => `${field} cannot exceed ${length} characters`,
    pattern: {
        imageUrl: 'Please enter a valid URL',
        email: 'Please enter a valid email address',
    },
    passwordMatch: 'Passwords do not match',
};

// Validation functions
export const validateField = (name, value, rules = {}) => {
    const fieldErrors = [];

    if (rules.required && !value?.trim()) {
        fieldErrors.push(VALIDATION_MESSAGES.required(name));
    }

    if (value && rules.minLength && value.length < rules.minLength) {
        fieldErrors.push(VALIDATION_MESSAGES.minLength(name, rules.minLength));
    }

    if (value && rules.maxLength && value.length > rules.maxLength) {
        fieldErrors.push(VALIDATION_MESSAGES.maxLength(name, rules.maxLength));
    }

    if (value && rules.pattern && !rules.pattern.test(value)) {
        fieldErrors.push(VALIDATION_MESSAGES.pattern[name]);
    }

    return fieldErrors;
};

// Form validators
export const validateLoginForm = (values) => {
    const errors = {};

    const emailErrors = validateField('Email', values.email, VALIDATION_RULES.email);
    if (emailErrors.length > 0) errors.email = emailErrors;

    const passwordErrors = validateField('Password', values.password, VALIDATION_RULES.password);
    if (passwordErrors.length > 0) errors.password = passwordErrors;

    return errors;
};

export const validateRegisterForm = (values) => {
    const errors = validateLoginForm(values);

    if (values.password !== values.rePassword) {
        errors.rePassword = [VALIDATION_MESSAGES.passwordMatch];
    }

    return errors;
};

export const validateProductForm = (values) => {
    const errors = {};

    const titleErrors = validateField('Title', values.title, VALIDATION_RULES.title);
    if (titleErrors.length > 0) errors.title = titleErrors;

    const descriptionErrors = validateField('Description', values.description, VALIDATION_RULES.description);
    if (descriptionErrors.length > 0) errors.description = descriptionErrors;

    const imageUrlErrors = validateField('Image URL', values.imageUrl, VALIDATION_RULES.imageUrl);
    if (imageUrlErrors.length > 0) errors.imageUrl = imageUrlErrors;

    return errors;
};

export const validateCommentForm = (values) => {
    const errors = {};

    const commentErrors = validateField('Comment', values.comment, VALIDATION_RULES.comment);
    if (commentErrors.length > 0) errors.comment = commentErrors;

    return errors;
};