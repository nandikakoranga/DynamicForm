
import { useState } from "react";
const useValidation = (values) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        let validationErrors = {};
        if (!values.name) {
            validationErrors.name = "Name is required";
        }
        if (!values.email) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            validationErrors.email = "Email is invalid";
        }
        if (!values.age || values.age <= 0) {
            validationErrors.age = "Age must be greater than 0";
        }
        if (values.attendingWithGuest === "yes" && !values.guestName) {
            validationErrors.guestName = "Guest name is required";
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    return {
        errors,
        validate,
    };
};

export default useValidation;