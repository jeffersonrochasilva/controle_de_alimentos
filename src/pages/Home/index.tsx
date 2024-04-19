import { Container, Content, Box, Title, Boxtable } from "./styles.tsx";
import { AppBar } from "../../components/index.tsx";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <Container>
      <AppBar />
      <Content>
        {/* <Box>
          <Title>Controle de Produtos</Title>
        </Box> */}
        {/* <Boxtable> */}
        <Outlet />
        {/* </Boxtable> */}
      </Content>
    </Container>
  );
};

export default Home;
