import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Camp, Button } from "./styles";
import axios from "axios";
import { HTTP } from "../../../HTTP";
export const Form = (props: any) => {
  const navigate = useNavigate();
  const [data, setDate] = useState<any>([]);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const getUsers = async () => {
    try {
      const response = await axios.get(`${HTTP.develop}users`);
      setDate(response.data);
      console.log(data, "data");
    } catch (e) {
      console.log(e);
    }
  };
  const checkUser = () => {
    const obj = {
      email: email,
      password: password,
    };
    const res = data.filter((item: any) => {
      return item === obj;
    });
    if (data.length > 0) {
      navigate("home");
    }
    console.log(res.length, data.length, "res");
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container>
      <Title>Login</Title>
      <Camp
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <Camp
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <Button onClick={checkUser}>Entrar</Button>
      <Button onClick={props.seeIcon}>Cadatrar</Button>
    </Container>
  );
};
