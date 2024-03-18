import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yupResolver(
    yup.object().shape({
        bankName: yup.string().required().label("Bank Name"),
        accountName: yup.string().required().label("Account Name"),
        accountNumber: yup.number().required().label("Account Number"),
        confirmAccountNumber: yup.number()
            .required()
            .oneOf([yup.ref('accountNumber')], 'Bank account numbers must match') // Validate if the confirmation matches the original bank number
            .label("Confirm Account Number"),
    }),
);

export default schema;