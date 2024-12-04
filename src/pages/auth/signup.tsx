import { Form, Formik, FormikValues } from "formik";
import style from "./auth.module.scss";
import * as Yup from "yup";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Link } from "react-router-dom";

export function SignUp() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmed: "",
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório."),
    email: Yup.string().email("Email inválido.").required("Campo obrigatório."),
    password: Yup.string()
      .min(6, "Mínimo de 6 caracteres.")
      .required("Campo obrigatório."),
    passwordConfirmed: Yup.string().oneOf(
      [Yup.ref("password")],
      "As senhas devem ser iguais."
    ),
  });

  const handleSubmit = (values: FormikValues) => {
    console.log(values);
  };

  return (
    <div>
      <div className={style.container}>
        <h1 className={style.title}>Cadastre-se</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            return (
              <Form onSubmit={formik.handleSubmit} className={style.form}>
                <Input
                  text="Digite seu nome completo"
                  type="text"
                  name="name"
                  placeholder="Nome"
                />

                <Input
                  text="Crie um email"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />

                <Input
                  text="Crie uma senha"
                  type="password"
                  name="password"
                  placeholder="Senha"
                />

                <Input
                  text="Confirme a senha"
                  type="password"
                  name="passwordConfirmed"
                  placeholder="Confirmar"
                />

                <div className={style.buttons}>
                  <Button button="secondary">
                    <Link to={"/"}>Voltar</Link>
                  </Button>
                  <Button type="submit" button="primary">
                    Criar conta
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
