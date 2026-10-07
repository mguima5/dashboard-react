import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm px-8 flex items-center justify-between">
      <div>
        <h2 className="text-sm font-semibold text-slate-200">Painel Financeiro</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
          <Bell className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
          <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium text-slate-200">Marina</span>
        </div>
      </div>
    </header>
  );
}