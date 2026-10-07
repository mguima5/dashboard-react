# Arquitetura do Projeto - DevFinance

## 1. Stack Tecnológica
* **Linguagem:** TypeScript
* **Biblioteca UI:** React (com Router para navegação baseada em rotas)
* **Estilização:** Tailwind CSS (utilizando classes utilitárias e paleta baseada em tons de `slate` e `indigo`)
* **Ícones:** Lucide React

## 2. Estrutura de Componentes Base
* **`Button`**: Componente reutilizável de botão com variantes visuais (`primary`, `secondary`, `danger`, `ghost`) e suporte a estado de carregamento (`isLoading`).
* **`Card`**: Contentor estilizado com bordas e sombras padronizadas para agrupamento de conteúdos.
* **`Input`**: Campo de formulário customizado com suporte a rótulos dinâmicos e mensagens de erro integradas.
* **`Layout`**: Estrutura principal que integra o menu lateral (`Sidebar`), o topo (`Header`) e a área dinâmica de conteúdo via `Outlet`.