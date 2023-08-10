import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    color: black;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
    transition: .4s;
    cursor: default;
  }
  h1:hover{
    color: #444444;
  }
`;

export const Content = styled.div`
  background-color: #ffffff;
  width: 20%;
  border-radius: 20px;
  padding: 10px;
  
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
