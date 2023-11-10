import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2; /* Set your desired background color */
`;

export const ContentWrapper = styled.div`
  text-align: center;
 
`;

export const Wrapper = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid #ddd; 
  padding: 20px;
  background-color: white; 
  border-radius: 8px;
`;


export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const FormWrapper = styled.div`
  margin-top: 20px;
  text-align: left;
`;

export const FormTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 8px;
`;

export const SignInLink = styled.p`
  margin-top: 8px;
`;

export const SignUpButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;
