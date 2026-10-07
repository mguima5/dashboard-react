import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TransactionsPage } from './TransactionsPage';
import * as useTransactionsModule from '../hooks/useTransactions';
import type { Transaction } from '../types';

const mockData: Transaction[] = [
  { id: '1', title: 'Salário Mensal', amount: 9500, category: 'Trabalho', type: 'income', createdAt: '2026-03-01T10:00:00.000Z' },
  { id: '2', title: 'Aluguel do Apartamento', amount: 2200, category: 'Moradia', type: 'outcome', createdAt: '2026-03-05T14:30:00.000Z' }
];

const mockUseTransactions = (overrides: Partial<ReturnType<typeof useTransactionsModule.useTransactions>> = {}) => {
  vi.spyOn(useTransactionsModule, 'useTransactions').mockReturnValue({
    data: mockData,
    isLoading: false,
    isError: false,
    ...overrides,
  } as ReturnType<typeof useTransactionsModule.useTransactions>);
};

describe('TransactionsPage (Conformidade com Spec RF04)', () => {
  it('deve renderizar as transações com valores formatados', () => {
    mockUseTransactions();

    render(<TransactionsPage />);

    expect(screen.getByText('Salário Mensal')).toBeInTheDocument();
    expect(screen.getByText('Aluguel do Apartamento')).toBeInTheDocument();
    expect(screen.getByText('Trabalho')).toBeInTheDocument();
  });

  it('deve filtrar transações por busca textual no título', () => {
    mockUseTransactions();

    render(<TransactionsPage />);

    const searchInput = screen.getByPlaceholderText('Buscar por descrição...');
    fireEvent.change(searchInput, { target: { value: 'Salário' } });

    expect(screen.getByText('Salário Mensal')).toBeInTheDocument();
    expect(screen.queryByText('Aluguel do Apartamento')).not.toBeInTheDocument();
  });

  it('deve filtrar transações quando selecionar a aba Saídas', () => {
    mockUseTransactions();

    render(<TransactionsPage />);

    const outcomeButton = screen.getByRole('button', { name: 'Saídas' });
    fireEvent.click(outcomeButton);

    expect(screen.getByText('Aluguel do Apartamento')).toBeInTheDocument();
    expect(screen.queryByText('Salário Mensal')).not.toBeInTheDocument();
  });
});