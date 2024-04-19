import { useState } from "react";
import { Container, Box, Camp, ButtonCamp, Text } from "./styles";
import axios from "axios";
import { HTTP } from "../../HTTP";

export const Form = () => {
  const [product, setProduct] = useState("");
  const [calorie, setCalorie] = useState("");
  const [value, setValue] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");

  const registerNewProdutct = async () => {
    if (!product || !calorie || !fat || !carbohydrate || !protein || !value) {
      return alert("Preencha todos os campos");
    }
    const obj = {
      name: product,
      calories: calorie,
      fat: fat,
      carbs: carbohydrate,
      protein: protein,
      iron: value,
    };
    try {
      await axios.post(`${HTTP.develop}list`, obj);
      alert("Produto cadastrado com sucesso");
      cleanProduts();
    } catch (E) {
      console.log(E);
    }
  };
  const cleanProduts = () => {
    setProduct("");
    setCalorie("");
    setValue("");
    setCarbohydrate("");
    setProtein("");
    setFat("");
  };
  return (
    <Container>
      <Box>
        <Text>Formulário</Text>
        <ButtonCamp onClick={registerNewProdutct}>Registrar</ButtonCamp>
      </Box>
      <Box>
        <Camp
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Produto"
        />
        <Camp
          type="number"
          value={calorie}
          onChange={(e) => setCalorie(e.target.value)}
          placeholder="Calorias"
        />
        <Camp
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Valor Energético"
        />

        <Camp
          type="number"
          value={carbohydrate}
          onChange={(e) => setCarbohydrate(e.target.value)}
          placeholder="Carboidrato"
        />
        <Camp
          type="number"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          placeholder="Proteína"
        />
        <Camp
          type="number"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
          placeholder="Gordura"
        />
      </Box>
    </Container>
  );
};
