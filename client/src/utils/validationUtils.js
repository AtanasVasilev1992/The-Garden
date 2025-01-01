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
        pattern: /^[A-Z0_9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
    password: {
        required: true,
        minLength: 6
    },
    comment: {
        required: true,
        minLength: 2,
    }
};

const VALIDATION_MESSAGES = {
    required: field => `${field} is required field!`,
    minLength: (field, length) => `${field} must be at least ${length} charecters long!`,
    maxLength: (field, length) => `${field} cannot exceed ${length} characters.`,
    pattern: {
        imageUrl: 'Please enter a valid URL',
        email: 'Please enter a valid email address',
    },
    passwordMatch: 'Passwords do not match',
}

// Validation functions
export const validateField = (name, value, rules = {}) => {
    const errors = {};

    if (rules.required && !value.trim()) {
        errors.push(VALIDATION_MESSAGES.required(name));
    };

    if (rules.minLength && value?.length < rules?.minLength) {
        errors.push(VALIDATION_MESSAGES.minLength(name, rules.maxLength));
    };

    if (rules.maxLength && value?.length > rules.maxLength) {
        errors.push(VALIDATION_MESSAGES.maxLength(name, rules.maxLength));
    };

    if (rules.pattern && !rules.pattern.test(value)) {
        errors.push(VALIDATION_MESSAGES.pattern[name]);
    };

    return errors;
};

// Form validations 
export const validateProductForm = (values) => {
    const errors = {};

    const titleErrors = validateField('Title', values.title, VALIDATION_RULES.title);
    if (titleErrors.length) {
        errors.title = titleErrors;
    };

    const descriptionErrors = validateField('Description', values.description, VALIDATION_RULES.description);
    if (descriptionErrors.length) {
        errors.description = descriptionErrors;
    };

    const imageUrlErrors = validateField('Image Url', values.imageUrl, VALIDATION_RULES.imageUrl);
    if (imageUrlErrors.length) {
        errors.imageUrl = imageUrlErrors;
    };

    return errors;
};

export const validateLoginForm = (values) => {
    const errors = {};

    const emailErrors = validateField('Email', values.email, VALIDATION_RULES.email);
    if (emailErrors.length) {
        errors.email = emailErrors;
    };

    const passwordErrors = validateField('Password', values.password, VALIDATION_RULES.password);
    if (passwordErrors.length) {
        errors.password = passwordErrors;
    };

    return errors;
};

export const validateRegisterForm = (values) => {
    const errors = {};

    if (values.password != values.rePassword) {
        errors.rePassword = [VALIDATION_MESSAGES.passwordMatch];
    };

    return errors;
};

export const validateCommentForm = (values) => {
    const errors = {};

    const commentsErrors = validateField('Comment', values.comment, VALIDATION_RULES.comment);
    if (commentsErrors.length) {
        errors.comment = commentsErrors;
    }

    return errors;
}