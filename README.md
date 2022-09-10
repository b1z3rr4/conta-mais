# Projeto Integrador - ContaMais

## Introdução

    Este documento tem como finalidade especificar as funcionalidades, regras de negócio utilizadas no projeto, tecnologias a serem utilizadas, metodologias de desenvolvimento, arquitetura, meios de comunicação da equipe, definição das tarefas principais e as prioridades.

    Este projeto é voltado integralmente para estudantes de desenvolvimento web, profissionais de desenvolvimento de API, pequenos empreendedores e profissionais autônomos que buscam entender como a aplicação funciona e sua utilização.

    Esta é uma  API que gerência dados de compra e vendas da empresa  enviados pelo usuário e devolve o balanço diário, mensal ou anual a depender da escolha do usuário e/ou dados enviados. Além disso, sendo limitado ao enquadramento MEI e EPP, retorna o cálculo do Simples Nacional do ano em questão.

    O propósito desse projeto é auxiliar os pequenos empreendedores que durante a pandemia foram prejudicados severamente com a queda nas vendas e/ou dificuldades para alavancar seus negócios. Boa parte desses profissionais pagam por esses serviços de gerenciamento de empresas e com esse sistema facilitando o acesso a essas informações e essa gestão eficiente do negócio ajuda o empreendedor e também aqueles que querem iniciar seus empreendimentos.

## Requisitos funcionais

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
            - Email, CPF e/ou senha inválido.
            - Usuário inexistente
            - Campos obrigatórios não preenchidos
- **Cadastro de usuário**
    - Entradas
        - Email
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
            - Email já existente
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

## Requisitos não funcionais

<aside>
✅ **Nodejs**

- Porque ele trata as requisições de forma não bloqueante, facilitando a escalabilidade da API.
</aside>

<aside>
✅ **MongoDB**

- Por ser um banco não relacional e já estar integrado com a nuvem evitando problemas ao acesso de requisições no banco de dados.
</aside>

<aside>
✅ **UUID**

- Pela segurança de gerar um Id não sequencial.
</aside>

<aside>
✅ **Express**

- Facilita a criação do servidor e definição das rotas.
</aside>

<aside>
✅ **Insomnia**

- Por ter uma interface mais intuitiva, facilitando os testes de endpoint.
</aside>

<aside>
✅ **Git e Github**

- Porque é a melhor ferramenta de controle de versão atual.

</aside>

Feito com ❤ por Grupo 6.
