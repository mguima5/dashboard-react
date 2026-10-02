import type { Transaction } from '../types';

// Dados simulados iniciais
const mockTransactions: Transaction[] = [
  {
    id: '1',
    title: 'Salário Mensal',
    amount: 9500,
    category: 'Trabalho',
    type: 'income',
    createdAt: '2026-03-01T10:00:00.000Z',
  },
  {
    id: '2',
    title: 'Aluguel do Apartamento',
    amount: 2200,
    category: 'Moradia',
    type: 'outcome',
    createdAt: '2026-03-05T14:30:00.000Z',
  },
  {
    id: '3',
    title: 'Desenvolvimento Freelance',
    amount: 3200,
    category: 'Projetos',
    type: 'income',
    createdAt: '2026-03-12T09:15:00.000Z',
  },
  {
    id: '4',
    title: 'Supermercado Mensal',
    amount: 850,
    category: 'Alimentação',
    type: 'outcome',
    createdAt: '2026-03-18T18:40:00.000Z',
  },
  {
    id: '5',
    title: 'Assinaturas de Streaming',
    amount: 120,
    category: 'Lazer',
    type: 'outcome',
    createdAt: '2026-03-20T11:20:00.000Z',
  },
];

// Simula uma chamada HTTP GET com atraso proposital de rede
export async function fetchTransactions(): Promise<Transaction[]> {
  await new Promise((resolve) => setTimeout(resolve, 800)); // Espera 800ms
  return [...mockTransactions];
}