import { LayoutDashboard, CheckCircle2 } from 'lucide-react'

export function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-700 max-w-md w-full space-y-4">
        <div className="flex items-center space-x-3">
          <LayoutDashboard className="w-8 h-8 text-indigo-400" />
          <h1 className="text-2xl font-bold">Dashboard Financeiro</h1>
        </div>
        
        <p className="text-slate-400 text-sm">
          Ambiente configurado com sucesso! Tailwind CSS e Lucide Icons funcionando perfeitamente.
        </p>

        <div className="flex items-center space-x-2 text-emerald-400 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5" />
          <span>Passo 1 concluído</span>
        </div>
      </div>
    </div>
  )
}

export default App