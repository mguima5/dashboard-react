import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';
import { Card } from '../components/Card';
import { formatCurrency } from '../utils/formatters';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Visão Geral</h1>
        <p className="text-sm text-slate-400">Resumo financeiro e estatísticas recentes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase">Total Entradas</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-emerald-400">{formatCurrency(15400)}</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase">Total Saídas</span>
            <ArrowDownRight className="w-4 h-4 text-rose-400" />
          </div>
          <p className="text-2xl font-bold text-rose-400">{formatCurrency(3850)}</p>
        </Card>

        <Card>
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase">Saldo Disponível</span>
            <DollarSign className="w-4 h-4 text-indigo-400" />
          </div>
          <p className="text-2xl font-bold text-slate-100">{formatCurrency(11550)}</p>
        </Card>
      </div>
    </div>
  );
}   