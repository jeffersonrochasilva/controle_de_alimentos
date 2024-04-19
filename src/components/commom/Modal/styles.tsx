import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
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
  height: 200px;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Box = styled.div``;

export const Title = styled.span`
  color: black;
`;

export const Text = styled.span`
  color: black;
`;
