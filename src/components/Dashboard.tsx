'use client';

import styled from 'styled-components';
import useDashboardData from '../hooks/useDashboardData';
import ChartComponent from './Chart';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 500px;
`;

const DashboardComponent = () => {
  const { sales, users } = useDashboardData();

  return (
    <Container>
      <h1>📊 Dashboard de Estatísticas</h1>
      <ChartComponent data={sales} label='Vendas' color='blue' />
      <ChartComponent data={users} label='Usuários' color='green' />
    </Container>
  );
};

export default DashboardComponent;
