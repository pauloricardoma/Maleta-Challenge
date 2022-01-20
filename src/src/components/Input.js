import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border: 2px solid ${({ theme }) => theme.colors.grey.ligth};
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.primary.dark};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey.dark};
  }
`;
