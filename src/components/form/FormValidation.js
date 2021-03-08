import { formFields } from "./formMetadata";

const nameValidation = (fieldName, fieldValue) => {
  if (!fieldValue.trim()) {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  if (fieldValue.trim().length >= 30) {
    return `${fieldName} maximum length is 30 characters`;
  }
  return null;
};

const selectValidation = (fieldName, fieldValue) => {
  if (!fieldValue.trim()) {
    return `${fieldName} is required`;
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be selected`;
  }
  return null;
};

const averageValidation = (fieldName, fieldValue) => {
  if (fieldValue.length === 0) {
    return `${fieldName} is required`;
  }
  if (!/^\d+$/.test(fieldValue)) {
    return `${fieldName} must be a number`;
  }
  // eslint-disable-next-line
  if (fieldValue == 0) {
    return `${fieldName} must be at least 1`;
  }
  if (fieldValue > 5) {
    return `${fieldName} must be under 6`;
  }
  return null;
};

export const validate = {
  firstName: (name) => nameValidation("First Name", name),
  lastName: (name) => nameValidation("Last name", name),
  className: (name) => selectValidation("Class name", name),
  average: (name) => averageValidation("Average", name),
};

export const formValidation = (member, errors, visits) => {
  return formFields[member.label].reduce(
    (acc, key) => {
      const newError = validate[key](member[key]);
      const newVisit = { [key]: true };
      return {
        errors: {
          ...acc.errors,
          ...(newError && { [key]: newError }),
        },
        visits: {
          ...acc.visits,
          ...newVisit,
        },
      };
    },
    {
      errors: { ...errors },
      visits: { ...visits },
    }
  );
};
