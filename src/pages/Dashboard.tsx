import { useMemo } from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign, Loader2, AlertCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { useTransactions } from '../hooks/useTransactions';
import { formatCurrency } from '../utils/formatters';
import type { SummaryData } from '../types';

export function DashboardPage() {
  // Consumindo nosso Custom Hook integrado ao TanStack Query
  const { data: transactions = [], isLoading, isError } = useTransactions();

  // Cálculo derivado com useMemo: só recalcula se "transactions" mudar
  const summary: SummaryData = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.totalIncome += transaction.amount;
          acc.balance += transaction.amount;
        } else {
          acc.totalOutcome += transaction.amount;
          acc.balance -= transaction.amount;
        }
        return acc;
      },
      { totalIncome: 0, totalOutcome: 0, balance: 0 }
    );
  }, [transactions]);

  // Tratamento de Loading
  if (isLoading) {
    return (
      <div className="h-64 flex flex-col items-center justify-center gap-3 text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
        <p className="text-sm">Carregando dados financeiros...</p>
      </div>
    );
  }

  // Tratamento de Erro
  if (isError) {
    return (
      <div className="h-64 flex flex-col items-center justify-center gap-3 text-rose-400">
        <AlertCircle className="w-8 h-8" />
        <p className="text-sm">Erro ao carregar os dados. Tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Visão Geral</h1>
        <p className="text-sm text-slate-400">Resumo financeiro e estatísticas em tempo real.</p>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Entradas</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-emerald-400">{formatCurrency(summary.totalIncome)}</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Saídas</span>
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-rose-400">{formatCurrency(summary.totalOutcome)}</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Saldo Disponível</span>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className={`text-2xl font-bold ${summary.balance >= 0 ? 'text-slate-100' : 'text-rose-400'}`}>
            {formatCurrency(summary.balance)}
          </p>
        </Card>
      </div>
    </div>
  );
}