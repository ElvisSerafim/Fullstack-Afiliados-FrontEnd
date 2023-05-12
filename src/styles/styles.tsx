import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 60px;
`;

export const Button = styled.button`
  display: flex;
  min-width: 150px;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: #fff;
  color: #4380fc;
  border: 0;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 200px;
  flex-direction: column;
  text-align: center;
`;

export const ContainerContentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 200px;
`;

export const InputFileForm = styled.input`
  display: flex;
  display: flex;
  min-width: 150px;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: #fff;
  color: #4380fc;
`;
