import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary);
  color: #fff;
  width: 400px;
  padding: 8px;
  border-radius: 4px;
  animation: fade 2s;

  input {
    padding: 0 12px;
    width: 100%;
    height: 36px;
    color: var(--white);
    border-radius: 4px;
    border-style: none;
    margin-bottom: 4px;
    transition: all .2s;
    background-color: var(--quaternary);
    :focus {
      background-color: var(--gray);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(0.9);
    } 
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Tilte = styled.h1`
  color: var(--tertiary);
  margin-bottom: 24px;
`;

export const SubmitButton = styled.button`
  padding: 4px 8px;
  height: 36px;
  width: 100%;
  margin-top: 12px;
  border-radius: 18px;
  border-style: none;
`;

export const ErroMsg = styled.span`
  width: 100%;
  font-size: 12px;
  color: var(--notification);
`;