'use client';

// HOOKS
import { useEffect, useState } from 'react';
import { useDashboardData } from '../../hooks';

// COMPONENTS
import ChartComponent from '../Chart';

// UTILS
import { capitalizeFirstLetter, formatDate } from '../../utils';

// STYLES
import {
  ChartsContainer,
  ChartWrapper,
  Container,
  LoadingSpinner,
  Title,
} from './Dashboard.styles';

const Dashboard: React.FC = () => {
  const { sales, users } = useDashboardData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sales.length > 0 && users.length > 0) {
      setLoading(false);
    }
  }, [sales, users]);

  return (
    <Container>
      <Title>📊 Dashboard de Estatísticas</Title>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ChartsContainer>
          <ChartWrapper>
            <ChartComponent
              data={sales.map((sale: { date: string }) => {
                if (typeof sale === 'object' && sale !== null) {
                  return {
                    ...(typeof sale === 'object' && sale !== null ? sale : {}),
                    date: formatDate(sale.date),
                  };
                }
                return sale;
              })}
              label='Vendas'
              color='blue'
            />
          </ChartWrapper>
          <ChartWrapper>
            <ChartComponent
              data={users.map((user: { name: { first: string } }) => {
                if (typeof user === 'object' && user !== null) {
                  return {
                    ...(typeof user === 'object' && user !== null ? user : {}),
                    name: {
                      ...user.name,
                      first: capitalizeFirstLetter(user.name.first),
                    },
                  };
                }
                return user;
              })}
              label='Usuários'
              color='green'
            />
          </ChartWrapper>
        </ChartsContainer>
      )}
    </Container>
  );
};

export default Dashboard;
