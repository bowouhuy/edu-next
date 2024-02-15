import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yupResolver(
  yup.object().shape({
    email: yup.string().email().required().label("Email"),
    password: yup.string().required().label("Password"),
  })
);

export default schema;
