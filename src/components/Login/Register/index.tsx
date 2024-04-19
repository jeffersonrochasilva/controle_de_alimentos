import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Camp, Button, Box } from "./styles";
import axios from "axios";
import { HTTP } from "../../../HTTP";
export const Register = (props: any) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [passwordSecund, setPasswordSecund] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [stepEmail, setStepEmail] = useState<boolean>(false);

  function checkEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const registerUsers = async () => {
    if (!checkEmail(email)) {
      return setStepEmail(true);
    }
    setStepEmail(false);
    if (password !== passwordSecund) {
      return alert("as senhas nao sao iguais");
    }
    const obj = {
      email: email,
      password: password,
    };
    try {
      await axios.post(`${HTTP.develop}users`, obj);
      alert("usurio cadastrado com sucesso");
      navigate("/ ");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <Box>
        <Camp
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" E-mail"
        />
        {stepEmail && (
          <span style={{ color: "red", fontSize: 10 }}>E-mail invalido</span>
        )}
      </Box>
      <Box>
        <Camp
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" Senha"
        />
      </Box>
      <Camp
        type="password"
        value={passwordSecund}
        onChange={(e) => setPasswordSecund(e.target.value)}
        placeholder=" Confirme sua Senha"
      />
      <Button onClick={registerUsers}>Cadastrar</Button>
      <Button onClick={props.seeIcon}>Logar</Button>
    </Container>
  );
};
