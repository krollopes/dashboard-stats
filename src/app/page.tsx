import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChartComponent from '../components/Chart';
import { api } from '../services/api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Dashboard = () => {
  const [sales, setSales] = useState<number[]>([]);
  const [users, setUsers] = useState<number[]>([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setSales(response.data.sales);
      setUsers(response.data.users);
    });
  }, []);

  return (
    <Container>
      <h1>📊 Dashboard de Estatísticas</h1>
      <ChartComponent data={sales} label='Vendas' color='blue' />
      <ChartComponent data={users} label='Usuários' color='green' />
    </Container>
  );
};

export default Dashboard;
