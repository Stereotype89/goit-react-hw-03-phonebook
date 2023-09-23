import styled from '@emotion/styled';

export const TelNumber = styled.span`
  border-radius: 4px;
`;

export const DelButton = styled.button`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.02em;
  font-weight: 500;
  border: 1px solid #212121;
  border-radius: 2px;
  cursor: pointer;
  transition-property: box-shadow, background, outline, border, color;
  background: #ffffff;

  transition-duration: 300ms;

  :hover {
    box-shadow: 0px 0px 6px 1px rgba(26, 181, 255, 1);
    background: #00aeff;
  }
`;
