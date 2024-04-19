import { useState, useEffect, Key } from "react";
import { Container, Box, Text, Title, Rows } from "./styles";
import axios from "axios";
import { HTTP } from "../../../HTTP";
export const Table = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);

  const [headers] = useState([
    { text: "Dessert (100g serving)" },
    { text: "Calories" },
    { text: "Gordura (g)" },
    { text: "Carboidrato (g)" },
    { text: "Proteina (g)" },
    { text: "valor Energetico (g)" },
  ]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get(`${HTTP.develop}list`);
        setData(response.data);
        console.log("response", data);
        console.log("response", data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    getList();
  }, []);
  return (
    <Container>
      <Box>
        <Title>Tabela</Title>
      </Box>
      {loading ? (
        <span>Caragando.....</span>
      ) : (
        <div>
          <Rows>
            {headers.map((item: any, index) => (
              <Text key={index}>{item.text}</Text>
            ))}
          </Rows>
          {data.map((item: any, index: Key) => (
            <Rows key={index}>
              <Text>{item.name}</Text>
              <Text>{item.calories} g</Text>
              <Text>{item.fat} g</Text>
              <Text>{item.carbs} g</Text>
              <Text>{item.protein} g</Text>
              <Text>{item.iron} g</Text>
            </Rows>
          ))}
        </div>
      )}
    </Container>
  );
};
