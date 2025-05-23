# Hortmann OrderFlow

<img src="https://i.ibb.co/v6c2MMt7/logo.png" alt="logo" border="0" width="70"/>

## Sobre o App

**Hortmann OrderFlow** é um aplicativo móvel desenvolvido para gerenciar o fluxo de pedidos internos de uma loja. O app permite acompanhar cada etapa do processo dos pedidos, desde o recebimento até o envio ou produção. Com ele, é possível registrar novos pedidos, atualizar seus status e visualizar o histórico completo de cada pedido.

### Funcionalidades Básicas:

- [ ] **Login:**
  - Tela de login para acessar e gerenciar suas entregas.
- [ ] **Cadastro de pedidos:**
  - Formulário para registrar pedidos com informações como código do pedido, descrição, data/hora e status inicial.
- [ ] **Listagem de pedidos:**
  - Exibição dos pedidos cadastrados com informações resumidas, como status atual.
- [ ] **Detalhamento do pedido:**
  - Página detalhada para cada pedido, mostrando informações completas e o histórico dos status.
- [ ] **Atualização do Pedido:**
  - Registro de novas atualizações, permitindo selecionar o novo status (ex.: Em Produção, Embalado, Enviado) e incluir observações.
- [ ] **Página Home para visualização:**
  - Página inicial acessível a todos, onde se pode inserir um código para visualizar o status do pedido sem precisar logar.

### Funcionalidades Adicionais / Trabalhos Futuros:

- [ ] **Favoritar pedidos:**
  - Usuário geral poder ter uma lista de pedidos para monitorar.
- [ ] **Notificações:**
  - Alertar o usuário sobre atualizações importantes de seus pedidos favoritados.

---

## Protótipos de Tela

Os protótipos das telas foram desenvolvidos no Figma para ilustrar o fluxo de navegação e a interface do app.  
Visualize os protótipos interativos neste link:

[Protótipos Hortmann OrderFlow (Figma)](https://www.figma.com/design/5GWDk38ZU3ZAeymg0S3uFk/Prot%C3%B3tipos-de-tela?node-id=1-2&t=3D8Ax57qTM93HFPk-1)

---

## Modelagem do Banco

Para o **Hortmann OrderFlow**, optamos por uma modelagem de banco de dados relacional simples que contempla tanto os dados das entregas quanto o gerenciamento de usuários. A seguir, a descrição das principais entidades e seus relacionamentos:

[Diagrama Público do Banco (draw.io)](https://drive.google.com/file/d/1tUQum6Utk3d2phQTcHz3OAAhMv6ZUcdX/view?usp=sharing)

## Atualizações desde o último checkpoint

Utilizei o NativeWind para estilizar toda a aplicação.
Realizei a componentização de todas as páginas, podendo ser reutilizaveis como a logo(FullLogo) ou se repetindo como o InfoStatus que mostra cada update do pedido.

## Planejamento de Sprints

Segue o cronograma das sprints planejadas até a conclusão do aplicativo:

### Sprint 1 (20/04 - 26/04)

- [x] **Criar Projeto Expo e configurar com Expo Router**
- [x] **Criar e estilizar header**

### Sprint 2 (27/04 - 03/05)

- [x] **Instalar NativeWind**
- [x] **Criar estaticamente e estilizar as páginas:**
  - [x] Home(Pública).
  - [x] Visualização do pedido(Pública).
  - [x] Login.

### Sprint 3 (04/05 - 10/05)

- [x] **Separar as seguintes páginas em componentes**
  - [x] Home(Pública)
  - [x] Visualização do pedido(Pública).
  - [x] Login.
- [x] **Criar dados fakes e adaptar os componentes com os mesmos**

### Sprint 4 (11/05 - 17/05)

- [x] **Atualizar Readme.md para o CheckPoint 2**
  - [x] Marcar tarefas executadas.
  - [x] Adicionar novas tarefas se necessário.
  - [x] Criar seção 'Atualizações desde o último checkpoint'.
- [X] **Gravar vídeo demonstrando o app**

### Sprint 5 (18/05 - 24/05)

- [ ] **Criar estaticamente e estilizar as páginas:**
  - [ ] Home(Logado).
  - [ ] Visualização do pedido(Logado).
  - [ ] Criação do pedido.
  - [ ] Criação de atualização.
- [ ] **Instalar 'React-native-picker'**

### Sprint 6 (25/05 - 31/05)

- [ ] **Criar banco de dados e implementa-lo no projeto substituindo os dados fakes**
- [ ] **Implementar validações e mensagens de erro**
- [ ] **Criar sistema de login e logout**

### Sprint 7 (01/06 - 07/06)

- [ ] **Polir e finalizar o APP**
- [ ] **Buildar o aplicativo e testar**

### Sprint 8 (08/06 - 14/06)

- [ ] **Atualizar Readme.md**
- [ ] **Gravar vídeo de apresentação do APP**

## Atualizações desde o último checkpoint
- Utilizei Native Wind para estilizar todas as telas e componentes da aplicação
- Como boas práticas:
  - Criei componentes que são reutilizaveis, como o InfoStatus, que tem a função de mostrar uma atualização do pedido
  - Utilizei mocks para simular o banco de dados enquanto o mesmo não é implementado.

## Video do Checkpoint 2 apresentando as telas feitas
- https://youtu.be/Ln59bTb2Ojc