import { BoxLeft, BoxRight, Container, Image } from "./styles";
import Dowload from "../../assets/logo.png";
import { Form, Register } from "../../components/Login";
import { useState } from "react";
const Login = () => {
  const [seeIconValue, setSeeIconValue] = useState(false);
  const seeIcon = () => {
    setSeeIconValue(!seeIconValue);
  };
  return (
    <Container>
      <BoxLeft>
        {seeIconValue ? (
          <Register seeIcon={seeIcon} />
        ) : (
          <Form seeIcon={seeIcon} />
        )}
      </BoxLeft>
      <BoxRight>
        <Image src={Dowload} alt="logo" />
      </BoxRight>
    </Container>
  );
};

export default Login;
