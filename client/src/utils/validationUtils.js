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
