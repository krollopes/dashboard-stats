import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ChartWrapper = styled.div`
  width: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;
