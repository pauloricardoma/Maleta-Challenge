import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const Search = styled.div`
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 20px;
  width: 100%;
  height: 86px;
  border-radius: 6px;
  display: flex;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  div {
    margin-right: 8px;
  }

  .input-nome-obra {
    width: 100%;
  }

  .input-cidade {
    width: 70%;
  }

  .input-estado {
    width: 40%;
  }

  button {
    max-width: 172px;
  }

  @media (max-width:724px) {
    flex-direction: column;
    height: 100%;

    .input-nome-obra {
      width: 100%;
    }

    .input-cidade {
      width: 100%;
      margin-top: 8px;
    }

    .input-estado {
      width: 100%;
      margin-top: 8px;
    }

    button {
      align-self: flex-end;
      margin-top: 8px;
      height: 44px;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  background: #FFFFFF;
  padding: 20px;
  width: 100%;
  height: 86px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-top: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);

  .card-inicio {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .card-fim {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;

    .obra-ask-delete {
      background: transparent;
      border: none;

      svg {
        height: 28px;
        width: 28px;
        color: ${({ theme }) => theme.colors.grey.dark};
      }
    }

    .obra-delete {
      display: none;
    }

    .delete-button {
      background: transparent;
      border: none;
      display: block;

      svg {
        height: 28px;
        width: 28px;
        color: red;
      }
    }
  }

  span {
    width: 100%;
    max-width: 150px;
  }

  @media (max-width:724px) {
    flex-direction: column;
    height: 102px;

    .card-fim {
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
    }
  }
`;
