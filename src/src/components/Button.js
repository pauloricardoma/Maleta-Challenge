import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    background: ${({ theme }) => theme.colors.grey.ligth};
  }
`;
