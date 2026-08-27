import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ArrowLeftRight, Settings, Wallet } from 'lucide-react';

export function Sidebar() {
  const navItems = [
    { to: '/', label: 'Visão Geral', icon: LayoutDashboard },
    { to: '/transactions', label: 'Transações', icon: ArrowLeftRight },
    { to: '/settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col shrink-0">
      {/* Brand / Logo */}
      <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-800">
        <Wallet className="w-6 h-6 text-indigo-500" />
        <span className="font-bold text-lg text-slate-100">DevFinance</span>
      </div>

      {/* Menu Links */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}