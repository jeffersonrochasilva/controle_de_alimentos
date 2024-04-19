import axios from "axios";
import { Container, Content, Box, Title, Camp, ButtonCamp } from "./styles";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { HTTP } from "../../../HTTP";
export const ModalDestaques = (props?: any) => {
  const [product, setProduct] = useState("");
  const [reason, setReason] = useState("");
  const [obs, setObs] = useState("");
  const [image, setImage] = useState("");
  const registerNew = async () => {
    if (!product || !reason || !obs || !image) {
      return alert("preencha todos os campos");
    }
    const obj = {
      title: product,
      description: obs,
      image: image,
    };
    try {
      await axios.post(`${HTTP.develop}product`, obj);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Content>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "50px",
          }}
        >
          <Title>Registre um novo destaque</Title>
          <div
            style={{ color: "#ff5721", cursor: "pointer" }}
            onClick={() => props.setSeeModal(false)}
          >
            <FaTimes />
          </div>
        </Box>
        <Box>
          <Camp
            placeholder="Produto"
            type="text"
            onChange={(e) => setProduct(e.target.value)}
          />
          <Camp
            placeholder="Motivo"
            type="text"
            onChange={(e) => setReason(e.target.value)}
          />
          <Camp
            placeholder="Observação"
            type="text"
            onChange={(e) => setObs(e.target.value)}
          />
          <Camp
            placeholder="Link imagem do produto"
            type="text"
            onChange={(e) => setImage(e.target.value)}
          />
        </Box>
        <Box>
          <ButtonCamp onClick={registerNew}>Registrar</ButtonCamp>
        </Box>
      </Content>
    </Container>
  );
};
