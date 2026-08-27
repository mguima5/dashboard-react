import { Outlet } from 'react-router-dom';
import { Sidebar } from './SideBar';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto">
          {/* O Outlet renderiza a página ativa com base na URL */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}