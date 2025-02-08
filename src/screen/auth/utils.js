import * as Yup from "yup";

const loginValidationSchema = Yup.object({
    username: Yup.string()
        .required("Enter your username"),

    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Enter your password")
})

export default loginValidationSchema;