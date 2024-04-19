import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  background: white;
  width: 300px;
  height: calc(100vh - 40px);
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  right: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Box = styled.div`
  width: calc(100% - 40px);
  padding: 10px;
`;

export const Title = styled.span`
  color: black;
`;

export const Text = styled.span`
  color: black;
`;
export const Camp = styled.input`
  width: 100%;
  height: 30px;
  /* min-width: 300px; */
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
