import { LayoutDashboard, CheckCircle2, DollarSign } from 'lucide-react'
import { formatCurrency } from './utils/formatters'
import type { Transaction } from './types'

export function App() {
  const sampleTransaction: Transaction = {
    id: '1',
    title: 'Projeto Freelance',
    amount: 3500,
    category: 'Desenvolvimento',
    type: 'income',
    createdAt: new Date().toISOString(),
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700 max-w-md w-full space-y-4">
        <div className="flex items-center space-x-3">
          <LayoutDashboard className="w-8 h-8 text-indigo-400" />
          <h1 className="text-2xl font-bold">Dashboard Financeiro</h1>
        </div>
        
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 space-y-2">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Teste de Tipagem e Formatação</p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{sampleTransaction.title}</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              {formatCurrency(sampleTransaction.amount)}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-emerald-400 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5" />
          <span>Passo 2 concluído: Estrutura & TypeScript integrados</span>
        </div>
      </div>
    </div>
  )
}

export default App