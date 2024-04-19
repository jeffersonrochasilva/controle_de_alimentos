import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  height: auto;
  padding: 20px;
  background: white;
  border-radius: 4px;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export const Camp = styled.input`
  width: 30%;
  height: 30px;
  min-width: 300px;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  padding: 10px;
  background: #f3f3f3;
  border-bottom-color: #bbbbbb;
  margin-top: 20px;
`;
export const ButtonCamp = styled.button`
  min-width: 150px;
  padding: 10px;
  height: 50px;
  color: #fff;
  border-style: none;
  background: #ff5721;
  border-radius: 4px;
  font-size: large;
`;

export const Text = styled.span``;
