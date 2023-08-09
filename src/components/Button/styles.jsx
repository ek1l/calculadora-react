import styled from "styled-components";
export const ButtonContainer = styled.button`
  width: 100px;
  text-align: center;
  height: 80px;
  border: 1px solid #cdcdcd;
  background-color: #00aaf0;
  color: white;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  flex: 1;
  transition: 0.2s;
  border-radius: 20px;

  &:hover {
    opacity: 0.6;
  }
`;
