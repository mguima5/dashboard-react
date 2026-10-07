# Especificação de Requisitos - DevFinance Dashboard

## 1. Visão Geral
O projeto **DevFinance** consiste num painel financeiro (*dashboard*) desenvolvido em React com TypeScript e estilizado utilizando Tailwind CSS, focado na gestão e visualização de transações financeiras.

## 2. Requisitos Funcionais
* **RF01 - Layout e Navegação:** O sistema deve possuir uma estrutura de layout persistente contendo uma barra lateral (`Sidebar`) com navegação entre rotas (`Visão Geral`, `Transações`, `Configurações`) e um cabeçalho (`Header`) com identificação do utilizador.
* **RF02 - Resumo Financeiro:** A página de Visão Geral (`DashboardPage`) deve calcular e exibir dinamicamente cartões com o Total de Entradas, Total de Saídas e o Saldo Disponível com base nos dados obtidos.
* **RF03 - Tratamento de Estados:** Os componentes de dados devem suportar estados visuais de carregamento (*loading* com spinner) e tratamento de erros de forma amigável.
* **RF04 - Listagem e Filtro de Transações:** A tela TransactionsPage deve renderizar a lista de transações com título, categoria, data e valor formatado. Deve conter botões/abas de filtro para alternar entre "Todas", "Entradas" e "Saídas", além de um campo de busca por texto (filtrando pelo título da transação).
* **RF05 - Configurações de Perfil:** A tela `SettingsPage` deve permitir que o usuário visualize e altere suas informações cadastrais básicas (nome completo, e-mail) e selecione preferências do sistema (moeda padrão e notificações ativas). Deve exibir validação em campos obrigatórios e feedback de salvamento com estado de carregamento simulado.