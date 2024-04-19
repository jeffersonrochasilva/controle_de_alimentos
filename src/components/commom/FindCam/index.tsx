import { useState, useEffect } from "react";
import axios from "axios";
import { BoxText, Container, OptionCamp, SelectCamp, Text } from "./styles";
import { FaSearch } from "react-icons/fa";
import { Modal } from "../Modal";
import { HTTP } from "../../../HTTP";
export const FindCamp = () => {
  const [see, setSee] = useState<boolean>(false);
  const [valor, setValor] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [seeModal, setSeeModal] = useState<boolean>(false);

  const [newitems, setnewitems] = useState<{
    map(
      arg0: (item: any, index: any) => import("react/jsx-runtime").JSX.Element
    ): import("react").ReactNode;
    name: string;
  }>();

  const handleSelectChange = (event: any) => {
    setValor(event.target.value);
    if (valor.length > 1) {
      const arr = data.filter(
        (item: { name: string }) => item.name.slice(0, valor.length) === valor
      );
      setnewitems(arr);
      setSee(true);
    } else {
      setSee(false);
    }
  };
  const getItem = (item: any) => {
    setSeeModal(true);
    setValor(item.name);
    setSee(false);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${HTTP.develop}list`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Container>
      <SelectCamp
        type="text"
        onChange={handleSelectChange}
        value={valor}
      ></SelectCamp>
      <div
        style={{
          position: "absolute",
          top: 25,
          right: 60,
        }}
        onClick={() => {
          newitems ? setSeeModal(true) : alert("Selecione um produto");
        }}
      >
        <FaSearch />
      </div>
      {see && (
        <OptionCamp>
          <BoxText>
            {newitems &&
              newitems.map((item: any, index: any) => (
                <Text onClick={() => getItem(item)} key={index}>
                  {item.name}
                </Text>
              ))}
          </BoxText>
        </OptionCamp>
      )}
      {seeModal && <Modal data={newitems} setSeeModal={setSeeModal} />}
    </Container>
  );
};
