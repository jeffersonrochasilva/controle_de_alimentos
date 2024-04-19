import { FindCamp } from "../commom/FindCam/index.tsx";
import { Box, Content, Title, Text } from "./styles.tsx";
import { useNavigate } from "react-router-dom";
// import { Modal } from "../commom/Modal/index.tsx";
export const AppBar = () => {
  const navigate = useNavigate();

  return (
    <Content>
      <Box>
        <Title>Controle de alementos</Title>
        <Text onClick={() => navigate("cadastro")}>Formulário</Text>
        <Text onClick={() => navigate("estoque")}>Tabela</Text>
        <Text onClick={() => navigate("")}>Destaques</Text>
      </Box>
      <Box>
        <FindCamp />
        {/* <Modal /> */}
      </Box>
    </Content>
  );
};
