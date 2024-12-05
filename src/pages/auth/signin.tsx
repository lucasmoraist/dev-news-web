import { Input } from "@/components/input";
import style from "./auth.module.scss";
import { Button } from "@/components/button";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/api/user/login";

export function SignIn() {
  const navigation = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const schema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const handleSubmit = async (values: FormikValues) => {
    const { email, password } = values;

    const response = await login({ email, password });

    if (response) {
      localStorage.setItem("token", response.token);
      navigation("/");
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form className={style.form} onSubmit={formik.handleSubmit}>
              <Input
                text="Email"
                type="email"
                name="email"
                placeholder="example@email.com"
              />

              <Input
                text="Senha"
                type="password"
                name="password"
                placeholder="Senha"
              />

              <div className={style.buttons}>
                <Button button="secondary">
                  <Link to={"/"}>Voltar</Link>
                </Button>
                <Button type="submit" button="primary">
                  Login
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
