import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yupResolver(
    yup.object().shape({
        password: yup.string()
        .required()
        .min(8)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter and number')
        .label("New Password"),
        password_confirmation: yup.string()
            .required()
            .min(8)
            .oneOf([yup.ref('password')], 'Passwords must match and must contain at least one uppercase letter, lowercase letter, and one number')
            .label("New Confirmation Password"),
    }),
)


export default schema;