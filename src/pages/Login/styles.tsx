import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: red;
  display: flex;
`;

export const BoxLeft = styled.div`
  width: 50%;
  height: 100vh;
  background: #6203ee;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BoxRight = styled.div`
  width: 50%;
  height: 100vh;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span``;

export const Image = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 5px;
  object-fit: cover;
`;
