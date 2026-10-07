import { useState, useMemo } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Loader2, 
  AlertCircle, 
  Inbox 
} from 'lucide-react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useTransactions } from '../hooks/useTransactions';
import { formatCurrency } from '../utils/formatters';
import type { Transaction } from '../types';

type FilterType = 'all' | 'income' | 'outcome';

export function TransactionsPage() {
  const { data: transactions = [], isLoading, isError } = useTransactions();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<FilterType>('all');

  // Filtra as transações com base no tipo e no termo de busca (RF04)
  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction: Transaction) => {
      const matchesType = filterType === 'all' || transaction.type === filterType;
      const matchesSearch = transaction.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [transactions, filterType, searchTerm]);

  // Tratamento de Loading (RF03)
  if (isLoading) {
    return (
      <div className="h-64 flex flex-col items-center justify-center gap-3 text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
        <p className="text-sm">Carregando transações...</p>
      </div>
    );
  }

  // Tratamento de Erro (RF03)
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
      {/* Cabeçalho da Página */}
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Transações</h1>
        <p className="text-sm text-slate-400">Listagem e filtros detalhados de movimentações.</p>
      </div>

      {/* Barra de Filtros e Busca (RF04) */}
      <Card className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
        <div className="w-full md:w-80 relative">
          <Input
            placeholder="Buscar por descrição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button
            variant={filterType === 'all' ? 'primary' : 'ghost'}
            onClick={() => setFilterType('all')}
            className="text-xs px-3 py-1.5"
          >
            Todas
          </Button>
          <Button
            variant={filterType === 'income' ? 'primary' : 'ghost'}
            onClick={() => setFilterType('income')}
            className="text-xs px-3 py-1.5"
          >
            Entradas
          </Button>
          <Button
            variant={filterType === 'outcome' ? 'primary' : 'ghost'}
            onClick={() => setFilterType('outcome')}
            className="text-xs px-3 py-1.5"
          >
            Saídas
          </Button>
        </div>
      </Card>

      {/* Tabela de Transações (RF04) */}
      <Card className="p-0 overflow-hidden">
        {filteredTransactions.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center gap-2 text-slate-500">
            <Inbox className="w-8 h-8" />
            <p className="text-sm">Nenhuma transação encontrada para os filtros aplicados.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900/60 border-b border-slate-700/60 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-6 py-4">Descrição</th>
                  <th className="px-6 py-4">Categoria</th>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4 text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredTransactions.map((tx: Transaction) => (
                  <tr key={tx.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-100 flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg ${
                        tx.type === 'income' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {tx.type === 'income' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      </div>
                      {tx.title}
                    </td>
                    <td className="px-6 py-4 text-slate-400">{tx.category}</td>
                    <td className="px-6 py-4 text-slate-400">
                      {new Date(tx.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                    <td className={`px-6 py-4 text-right font-semibold ${
                      tx.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {tx.type === 'outcome' ? '- ' : '+ '}
                      {formatCurrency(tx.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}