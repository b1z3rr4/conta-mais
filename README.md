# Conta Mais

# Introdução

Este documento tem como finalidade especificar as funcionalidades, regras de negócio utilizadas no projeto, tecnologias a serem utilizadas, metodologias de desenvolvimento, arquitetura, meios de comunicação da equipe, definição das tarefas principais e as prioridades.

Este projeto é voltado integralmente para estudantes de desenvolvimento web, profissionais de desenvolvimento de API, pequenos empreendedores e profissionais autônomos que buscam entender como a aplicação funciona e sua utilização.

Esta é uma  API que gerência dados de compra e vendas da empresa  enviados pelo usuário e devolve o balanço diário, mensal ou anual a depender da escolha do usuário e/ou dados enviados. Além disso, sendo limitado ao enquadramento MEI e EPP, retorna o cálculo do Simples Nacional do ano em questão.

O propósito desse projeto é auxiliar os pequenos empreendedores que durante a pandemia foram prejudicados severamente com a queda nas vendas e/ou dificuldades para alavancar seus negócios. Boa parte desses profissionais pagam por esses serviços de gerenciamento de empresas e com esse sistema facilitando o acesso a essas informações e essa gestão eficiente do negócio ajuda o empreendedor e também aqueles que querem iniciar seus empreendimentos.

# Requisitos funcionais

- **Login**
  - Entradas
    - E-mail ou CPF
    - Senha
  - Processamento
    - Verificar se o usuário existe no banco de dados
    - Verificar se a senha corresponde a senha salva no banco de dados
  - Saída
    - Sucesso
      - Usuário logado.
    - Erro
      - E-mail, CPF e/ou senha inválido.
      - Usuário inexistente
      - Campos obrigatórios não preenchidos
- **Cadastro de usuário**
  - Entradas
    - E-mail
    - CPF
    - Senha
  - Processamento
    - Verificar se e-mail já não existe no banco de dados
    - Verificar se CPF já não existe no banco de dados
    - Verificar se a senha contém 8 caracteres, contém pelo menos uma letra maiúscula, uma letra minúscula e um símbolo.
  - Saída
    - Sucesso
      - Cadastro realizado
    - Erro
      - E-mail já existente
      - CPF já existente
      - Senha inferior a 8 caracteres
      - Senha precisa ter pelo menos uma letra maiúscula, uma letra minúscula e um símbolo.
- **Cadastro da Empresa**
  - Entradas
    - CNPJ
    - Razão Social
    - Enquadramento da Empresa
    - Anexo pertencente
    - Alíquota
    - Senha
  - Processamento
    - Verificar se a empresa já foi cadastrada
      - Verificar se a senha passada confere com a senha cadastrada
      - Retornar as informações visíveis
    - Salvar Informações no banco de dados caso a empresa não esteja cadastrada
  - Saída
    - Sucesso
      - Empresa cadastrada
    - Erro
      - Empresa já cadastrada
      - Senha inválida
      - Campos obrigatórios não preenchidos
- **Cadastro de contas**
  - Entradas
    - Agência
    - Conta
    - Instituição financeira
    - Total em caixa
    - Informar limite da conta (opcional)
  - Processamento
    - Verificar se número da conta já foi utilizada
    - Salvar no banco de dados
  - Saídas
    - Sucesso
      - Cadastro realizado com sucesso!
    - Erro
      - Conta já cadastrada
      - Campos obrigatórios em branco
- **Cadastro de entradas e saídas**
  - Entradas
    - Tipo de transação
    - Pequena descrição
    - Valor
    - Referenciar a conta
  - Processamento
    - Verifica se a conta possui o valor em casos de saídas
    - Retirar ou inserir o valor na conta
  - Saída
    - Sucesso
      - Uma mensagem de sucesso com o valor atualizado
    - Erro
      - Conta não referenciada
      - Tipo de transação não referenciado
      - Valor ultrapassou o limite da conta

### Rodando a API

```powershell
# Clone este repositório
$ git clone https://github.com/cleosilva/conta-mais.git

# Acesse a pasta do projeto no terminal/cmd
$ cd conta-mais

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3001 - acesse http://localhost:3001
```

## Formato da resposta

| Resposta da API | JSON |
| --------------- | ---- |
| Métodos aceitos | GET  |

## Rotas

### User

### Criar usuário:

```jsx
https://conta-mais-production.up.railway.app/user/
```

### Parâmetros - Corpo da Requisição

```jsx
{
	"name": "Adm",
	"email": "adm@contaMais.com",
	"cpf": "19557254721",
	"password": "Adminis@123"
}
```

### Resposta

```jsx
{
	"id": "d5d78738-857e-4d09-8105-0af73f09bfbe",
	"name": "Adm",
	"email": "adm@contaMais.com",
	"password_hash": "738f8e160cf7f127b000fe9f1b37e4225d80a72ad7709e1dbf44cf2df67eb6e9f0ec67293f17bb6ad92521b2968656e86b741a563eef984baa62d30315bcc434",
	"cpf": "19557254721"
}
```

### Listar usuários:

```jsx
https://conta-mais-production.up.railway.app/user/list
```

### Resposta

```jsx
[
  {
    id: "d1000da0-8921-4b88-9a6d-ccf5c5b473ff",
    name: "Suporte",
    email: "suporte@contaMais.com",
    password_hash:
      "5494069f5953f5c4350715a35a18edb01afe6b2b682e67688d9691e47f15e813bb6144a534f83c9a6cb8122a647e4a6aeb8f6ac8625525e869b8707201a0d743",
    cpf: "191254687321",
  },
  {
    id: "d5d78738-857e-4d09-8105-0af73f09bfbe",
    name: "Adm",
    email: "adm@contaMais.com",
    password_hash:
      "738f8e160cf7f127b000fe9f1b37e4225d80a72ad7709e1dbf44cf2df67eb6e9f0ec67293f17bb6ad92521b2968656e86b741a563eef984baa62d30315bcc434",
    cpf: "19557254721",
  },
];
```

### Atualizar usuário:

```jsx
https://conta-mais-production.up.railway.app/user/update/:id
```

### Parâmetros - Corpo da Requisição

```jsx
{
	"name": "Thaiane Camarda",
	"email": "thaiane@gmail.com",
	"cpf": "78715498752"
}
```

### Resposta

```jsx
"Usuário atualizado com sucesso!";
```

### Excluir usuário:

```jsx
https://conta-mais-production.up.railway.app/user/delete/:id
```

### Resposta

```jsx
"Deletado com sucesso!";
```

### Business

### Criar empresa:

```jsx
https://conta-mais-production.up.railway.app/business/
```

### Parâmetros - Corpo da Requisição

```jsx
{
	"cnpj": "13241243123135",
	"company": "Conta Menos Soluções S.A",
	"user_id": "d5d78738-857e-4d09-8105-0af73f09bfbe"
}
```

### Resposta

```jsx
{
	"message": {
		"id": "91453cfb-42e7-45ca-8baf-4cc35249329b",
		"cnpj": "13241243123135",
		"company": "Conta Menos Soluções S.A",
		"user_id": "d5d78738-857e-4d09-8105-0af73f09bfbe"
	}
}
```

### Listar empresa:

```jsx
https://conta-mais-production.up.railway.app/business/list
```

### Resposta

```jsx
{
	"message": [
		{
			"id": "27939899-c905-4492-acea-22956d563a8e",
			"cnpj": "13241243123134",
			"company": "Conta Mais Soluções S.A",
			"user_id": "d5d78738-857e-4d09-8105-0af73f09bfbe"
		},
		{
			"id": "91453cfb-42e7-45ca-8baf-4cc35249329b",
			"cnpj": "13241243123135",
			"company": "Conta Menos Soluções S.A",
			"user_id": "d5d78738-857e-4d09-8105-0af73f09bfbe"
		}
	]
}
```

### Atualizar empresa:

```jsx
https://conta-mais-production.up.railway.app/bsiness/update/:id
```

### Parâmetros - Corpo da Requisição

```jsx
{
	"cnpj": "12345678910123",
	"company": "Conta Mais S.A"
}
```

### Resposta

```jsx
{
	"message": "Empresa atualizada!"
}
```

### Excluir empresa:

```jsx
https://conta-mais-production.up.railway.app/business/delete/:id
```

### Resposta

```jsx
{
	"message": "Deletado com sucesso!"
}
```

### Bank Account

### Criar conta bancária:

```jsx
https://conta-mais-production.up.railway.app/bank/
```

### Parâmetros - Corpo da Requisição

```jsx
{
	"financial_institution": "Nubank",
	"cash": 1000,
	"limit": 0,
	"id_business": "27939899-c905-4492-acea-22956d563a8e"
}
```

### Resposta

```jsx
{
	"message": {
		"id": "6ca7a256-559f-47c1-884c-bc23d751d3de",
		"financial_institution": "Nubank",
		"cash": 1000,
		"limit": 0,
		"id_business": "27939899-c905-4492-acea-22956d563a8e"
	}
}
```

### Listar conta bancária:

```jsx
https://conta-mais-production.up.railway.app/bank/list
```

### Resposta

```jsx
{
	"message": [
		{
			"id": "08b01777-85f1-4bd6-86a4-d0ee345f3cf4",
			"financial_institution": "Nubank",
			"cash": 1000,
			"limit": 0,
			"id_business": "c2020a47-faed-4aa1-92c8-50fe44314d9c"
		}
	]
}
```

### Atualizar conta bancária:

```jsx
https://conta-mais-production.up.railway.app/bank/update/:id
```

### Parâmetros - Corpo da Requisição

```jsx
{
	"financial_institution": "Itau",
	"limit": 500
}
```

### Resposta

```jsx
{
	"message": "Conta atualizada!"
}
```

### Excluir conta bancária:

```jsx
https://conta-mais-production.up.railway.app/bank/delete/:id
```

### Resposta

```jsx
{
	"message": "Deletado com sucesso!"
}
```

### Moviments

### Criar movimentação:

```jsx
https://conta-mais-production.up.railway.app/moviments/
```

### Parâmetros - Corpo da Requisição

```jsx
{
	"name": "Pagamento do Itau",
	"description": "Cartao de credito",
	"value": 3500,
	"type": "saida",
	"id_bankAccount": "e77a37f3-6b72-4620-aca1-f36ca2310c20"
}
```

### Resposta

```jsx
{
	"message": {
		"id": "a3ebbbad-8011-459e-822c-de09405e0624",
		"name": "Pagamento do Itau",
		"description": "Cartao de credito",
		"value": 200,
		"type": "saida",
		"id_bankAccount": "0e16c81e-ed91-4b5a-86bf-1bf7a1e5a1d1"
	}
}
```

### Listar movimentos:

```jsx
https://conta-mais-production.up.railway.app/moviments/list
```

### Resposta

```jsx
{
	"message": [
		{
			"id": "a3ebbbad-8011-459e-822c-de09405e0624",
			"name": "Pagamento do Itau",
			"description": "Cartao de credito",
			"value": 200,
			"type": "saida",
			"id_bankAccount": "0e16c81e-ed91-4b5a-86bf-1bf7a1e5a1d1"
		}
	]
}
```

### Atualizar movimentos:

```jsx
https://conta-mais-production.up.railway.app/moviments/update/:id
```

### Parâmetros - Corpo da Requisição

```jsx
{
	"name": "Venda de produtos",
	"description": "venda de produtos",
	"value": 5000,
	"type": "Saida"
}
```

### Resposta

```jsx
{
	"message": "Atualizado com sucesso!"
}
```

### Excluir movimento:

```jsx
https://conta-mais-production.up.railway.app/bank/delete/:id
```

### Resposta

```jsx
{
	"message": "Deletado com sucesso!"
}
```
