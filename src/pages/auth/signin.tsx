import { Input } from "@/components/input";
import style from "./auth.module.scss";
import { Button } from "@/components/button";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export function SignIn() {
  const initialValues = {
    email: "",
    password: "",
  };

  const schema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
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
