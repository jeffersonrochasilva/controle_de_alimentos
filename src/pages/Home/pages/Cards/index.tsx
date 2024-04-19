import {
  Container,
  BoxLeft,
  BoxLog,
  BoxInfo,
  Title,
  Text,
  BoxButton,
  SeeInfo,
  BoxRight,
  ButtonCamp,
  BoxContainer,
  Box,
  Image,
} from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { ModalDestaques } from "../../../../components/commom/ModalDestaques";
import { HTTP } from "../../../../HTTP";
interface Items {
  id: string;
  title: string;
  description: string;
  image: string;
}

const Cards = () => {
  const [data, setData] = useState<Items[]>([]);
  const [seeModal, setSeeModal] = useState<boolean>(false);

  const getitm = async () => {
    try {
      const response = await axios.get(`${HTTP.develop}product`);
      console.log(response);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getitm();
  }, []);
  return (
    <BoxContainer>
      <Box>
        <Title>Produtos em Destaque</Title>
        <ButtonCamp onClick={() => setSeeModal(true)}>Registrar</ButtonCamp>
      </Box>
      {data &&
        data.map((item, index) => (
          <Container key={index}>
            <BoxLeft>
              <BoxLog>
                <Image src={item.image} />
              </BoxLog>
              <BoxInfo>
                <Title>{item.title}</Title>
                <Text>{item.description}</Text>
                <BoxButton>
                  <SeeInfo>See more details</SeeInfo>
                  <SeeInfo style={{ background: "#ebf9fb" }}>
                    See more details
                  </SeeInfo>
                  <SeeInfo style={{ background: "#ebf9fb" }}>
                    See more details
                  </SeeInfo>
                </BoxButton>
              </BoxInfo>
            </BoxLeft>
            <BoxRight></BoxRight>
          </Container>
        ))}
      {seeModal && <ModalDestaques setSeeModal={setSeeModal} />}
    </BoxContainer>
  );
};
export default Cards;
