import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; // Definir a altura da página inteira
`;

export const BoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

export const CustomInput = styled(Input)`
  margin-bottom: 10px;
`;

export const CustomButton = styled(Button)`
  margin-top: 20px;
`;
