import React, { useState } from 'react';
import { User, Bell, CheckCircle2, DollarSign } from 'lucide-react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

interface UserSettings {
  fullName: string;
  email: string;
  currency: 'BRL' | 'USD' | 'EUR';
  notificationsEnabled: boolean;
}

export function SettingsPage() {
  const [formData, setFormData] = useState<UserSettings>({
    fullName: 'Marina Fonseca',
    email: 'marina@devfinance.com',
    currency: 'BRL',
    notificationsEnabled: true,
  });

  const [errors, setErrors] = useState<{ fullName?: string; email?: string }>({});
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  function validate() {
    const currentErrors: { fullName?: string; email?: string } = {};

    if (!formData.fullName.trim()) {
      currentErrors.fullName = 'O nome completo é obrigatório.';
    }

    if (!formData.email.trim()) {
      currentErrors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      currentErrors.email = 'Insira um e-mail válido.';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowSuccess(false);

    if (!validate()) return;

    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSaving(false);
    setShowSuccess(true);
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">Configurações</h1>
        <p className="text-sm text-slate-400">Preferências de perfil e do sistema.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-700/60 text-slate-200 font-semibold text-sm">
            <User className="w-4 h-4 text-indigo-400" />
            <span>Perfil do Usuário</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Nome Completo"
              value={formData.fullName}
              error={errors.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Digite seu nome"
            />
            <Input
              label="E-mail"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu.email@exemplo.com"
            />
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-700/60 text-slate-200 font-semibold text-sm">
            <DollarSign className="w-4 h-4 text-indigo-400" />
            <span>Preferências Regionais e Alertas</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="currency-select" className="text-xs font-medium text-slate-300">
                Moeda Padrão
              </label>
              <select
                id="currency-select"
                value={formData.currency}
                onChange={(e) =>
                  setFormData({ ...formData, currency: e.target.value as UserSettings['currency'] })
                }
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              >
                <option value="BRL">Real Brasileiro (BRL)</option>
                <option value="USD">Dólar Americano (USD)</option>
                <option value="EUR">Euro (EUR)</option>
              </select>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-slate-400" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Notificações no Dashboard</p>
                  <p className="text-xs text-slate-500">Receber lembretes de movimentações financeiras</p>
                </div>
              </div>
              <input
                type="checkbox"
                aria-label="Ativar notificações"
                checked={formData.notificationsEnabled}
                onChange={(e) =>
                  setFormData({ ...formData, notificationsEnabled: e.target.checked })
                }
                className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
            </div>
          </div>
        </Card>

        <div className="flex items-center gap-4">
          <Button type="submit" isLoading={isSaving}>
            Salvar Preferências
          </Button>

          {showSuccess && (
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Configurações atualizadas com sucesso!</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}