import { Container, Content, Box, Title, Text } from "./styles";
import { FaTimes } from "react-icons/fa";
export const Modal = (props?: any) => {
  return (
    <Container>
      <Content>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title>Produto</Title>
          <div
            style={{ color: "#ff5721", cursor: "pointer" }}
            onClick={() => props.setSeeModal(false)}
          >
            <FaTimes />
          </div>
        </Box>
        <Box>
          {props.data.map((item: any, index: any) => (
            <ul key={index}>
              <li>Produto: {item.name}</li>
              <li>Calorias: {item.calories} g</li>
              <li>Gorduras: {item.fat} g</li>
              <li>Carboidratos: {item.carbs} g</li>
              <li>Proteinas: {item.protein} g</li>
              <li>Valor energetico: {item.iron} g</li>
            </ul>
          ))}
          <Text>
            Calcule bem a sua dieta, sigas as instruções do seu nutricionista.
          </Text>
        </Box>
      </Content>
    </Container>
  );
};
