import styled from '@emotion/styled';

export const Search = styled.input`
  border: 1px solid #212121;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  line-height: 0;
  color: black;
  transition-property: box-shadow, outline, border;
  transition-duration: 300ms;

  :focus {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid #717070;
    outline: none;
  }
`;
