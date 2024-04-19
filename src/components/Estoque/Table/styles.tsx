import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  border-radius: 4px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const Rows = styled.div`
  height: 40px;
  width: 100%;
  border: solid #e8ebec;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  height: 40px;
  margin-bottom: 40px;
  margin-top: 40px;
`;
export const Title = styled.span``;

export const Text = styled.span`
  width: calc(100% / 6);
  padding: 5px;
`;
