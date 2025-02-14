import { useEffect, useState } from 'react';
import { api } from '../services/api';

const useDashboardData = () => {
  const [sales, setSales] = useState<number[]>([]);
  const [users, setUsers] = useState<number[]>([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setSales(response.data.sales);
      setUsers(response.data.users);
    });
  }, []);

  return { sales, users };
};

export default useDashboardData;
