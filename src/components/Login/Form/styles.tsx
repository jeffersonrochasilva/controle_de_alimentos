import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 300px;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  border: solid #eeeded;
`;
export const Title = styled.span`
  color: #ff5721;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
`;
export const Camp = styled.input`
  border-style: none;
  background: #eeeded;
  width: 330px;
  border-radius: 4px;
  padding: 10px;
  height: 30px;
`;
export const Button = styled.button`
  width: 350px;
  height: 50px;
  border-radius: 4px;
  background: blue;
  color: white;
  border-style: none;
`;
