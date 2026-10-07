import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SettingsPage } from './SettingsPage';

describe('Settings (Conformidade com Spec RF05)', () => {
  it('deve renderizar os campos de perfil e preferências com valores iniciais', () => {
    render(<SettingsPage />);

    expect(screen.getByLabelText('Nome Completo')).toHaveValue('Marina Fonseca');
    expect(screen.getByLabelText('E-mail')).toHaveValue('marina@devfinance.com');
    expect(screen.getByLabelText('Moeda Padrão')).toHaveValue('BRL');
    expect(screen.getByRole('checkbox', { name: /ativar notificações/i })).toBeChecked();
  });

  it('deve exibir mensagem de erro quando campos obrigatórios estiverem vazios', async () => {
    render(<SettingsPage />);

    const nameInput = screen.getByLabelText('Nome Completo');
    fireEvent.change(nameInput, { target: { value: '' } });

    const submitBtn = screen.getByRole('button', { name: /salvar preferências/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText('O nome completo é obrigatório.')).toBeInTheDocument();
  });

  it('deve validar e submeter as configurações com mensagem de sucesso', async () => {
    render(<SettingsPage />);

    const submitBtn = screen.getByRole('button', { name: /salvar preferências/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Configurações atualizadas com sucesso!')).toBeInTheDocument();
    });
  });
});