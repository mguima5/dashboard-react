import { useQuery } from '@tanstack/react-query';
import { fetchTransactions } from '../services/api';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'], // Identificador único do cache
    queryFn: fetchTransactions,  // Função assíncrona que busca os dados
  });
}