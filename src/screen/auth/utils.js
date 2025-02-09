import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
    username: Yup.string()
        .required("Enter your username"),

    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Enter your password")
})

export const signupValidationSchema = Yup.object({
    number: Yup.string()
        .matches(/^[6789]\d{9}$/, 'Mobile number must start with 6, 7, 8, or 9 and be exactly 10 digits')
        .required("Enter your mobile number")
});

