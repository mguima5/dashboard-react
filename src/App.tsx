import { useState } from 'react';
import { LayoutDashboard, Plus, Trash2, ArrowUpRight } from 'lucide-react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { formatCurrency } from './utils/formatters';

export function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleSimulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Cabeçalho */}
        <header className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-7 h-7 text-indigo-400" />
            <h1 className="text-xl font-bold">Design System Base</h1>
          </div>
          <Button variant="primary" onClick={handleSimulateLoad} isLoading={loading}>
            <Plus className="w-4 h-4" />
            Nova Transação
          </Button>
        </header>

        {/* Exibição dos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase">Entradas</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-slate-100">{formatCurrency(12450.00)}</p>
          </Card>

          <Card>
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase">Variantes de Botões</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" className="text-xs py-1.5 px-3">Secundário</Button>
              <Button variant="danger" className="text-xs py-1.5 px-3">
                <Trash2 className="w-3.5 h-3.5" /> Deletar
              </Button>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase">Teste de Input</span>
            </div>
            <Input
              placeholder="Digite para buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Card>
        </div>

      </div>
    </div>
  );
}

export default App;