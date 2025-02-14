import { useEffect, useState } from 'react';

const useDashboardData = () => {
  const [sales, setSales] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando dados de vendas
        const salesData = [
          { date: '2025-01-01', value: 100 },
          { date: '2025-01-02', value: 150 },
        ];
        console.log('Sales Data:', salesData);
        setSales(salesData);

        // Fetching user data from the API
        const usersResponse = await fetch(
          'https://randomuser.me/api/?results=5'
        );
        const usersData = await usersResponse.json();
        console.log('Users Data:', usersData.results); // Adicione este log
        setUsers(usersData.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { sales, users };
};

export default useDashboardData;
