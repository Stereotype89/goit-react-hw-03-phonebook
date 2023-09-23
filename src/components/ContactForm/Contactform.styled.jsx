import styled from '@emotion/styled';
import { Form, ErrorMessage, Field } from 'formik';

export const NewContact = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 320px;
  padding: 12px;
  justify-content: left;
  font-size: 15px;
  border: 1px solid #212121;
  border-radius: 4px;
  outline: none;
  transition-property: box-shadow, outline, border;
  transition-duration: 300ms;
  :hower {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
    border: 4px solid #717070;
    outline: none;
`;

export const Input = styled(Field)`
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #212121;
  border-radius: 2px;
  color: black;
  outline: none;
  transition-property: box-shadow, outline, border;
  transition-duration: 300ms;

  :focus {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid #717070;
    outline: none;
`;

export const ErrCaption = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 400;
  color: red;
`;

export const Button = styled.button`
  margin: 10px 10px 5px;
  border: 1px solid #212121;
  border-radius: 4px;
  background-color: white;
  width: 107px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: black;
  cursor: pointer;
  outline: none;
  transition-property: box-shadow, background, outline, border, color;
  background: #ffffff;
  transition-duration: 300ms;

  :active,
  :hover {
    background: #00aeff;
  }
`;
