import styled from "styled-components";
export const BoxContainer = styled.div`
  width: calc(100% - 40px);
  height: auto;
  padding: 20px;
`;
export const Container = styled.div`
  width: calc(100% - 40px);
  height: 90px;
  padding: 20px;
  background: white;
  border-radius: 4px;
  display: flex;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const BoxLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const BoxRight = styled.div`
  width: 50%;
  height: 100%;
`;
export const BoxLog = styled.div`
  width: 85px;
  height: 85px;
  background: gray;
  border-radius: 4px;
`;
export const BoxInfo = styled.div`
  height: 75px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BoxButton = styled.div``;
export const Title = styled.span`
  font-family: sans-serif;
  color: #1b6a51;
  font-size: 20px;
  font-weight: 600;
`;
export const Box = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
export const Text = styled.span`
  font-family: sans-serif;
  color: gray;
  font-size: 15px;
`;
export const SeeInfo = styled.span`
  border: 1px solid #1b6a51;
  margin-right: 5px;
  border-radius: 50px;
  padding: 5px;
  font-size: 12px;
  color: #1b6a51;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: white;
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
