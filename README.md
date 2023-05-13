# API Backend do Dashboard

Este é o repositório da API Backend do Dashboard da empresa GD7. Ele foi desenvolvido com Node.js e TypeScript para os endpoints. O objetivo da API é fornecer aos supervisores acesso fácil às informações de campanhas e vendas mensais, permitindo a conexão com o banco de dados e recuperar informações relevantes para exibir no frontend.

## Instalação

Para instalar a API, siga os passos abaixo:

1. Faça o download do repositório
2. Abra o terminal e navegue até o diretório da API
3. Execute o comando `npm install` para instalar as dependências necessárias
4. Crie um arquivo `.env` no diretório raiz do projeto e configure as variáveis de ambiente necessárias, como a porta em que a API irá rodar e as credenciais do banco de dados.

## Dependências

- `@types/multer`: "^1.4.7"
- `cors`: "^2.8.5"
- `dotenv`: "10.0.0"
- `express`: "4.17.1"
- `express-async-errors`: "3.1.1"
- `joi`: "17.6.0"
- `jsonwebtoken`: "8.5.1"
- `multer`: "^1.4.5-lts.1"
- `mysql2`: "2.3.0"

## Uso

Para utilizar a API, execute o comando `npm run dev` para iniciar o servidor localmente. A API possui as seguintes rotas:

- `/login`: rota para autenticação do usuário
- `/products`: rota para visualização, criação, atualização e remoção de produtos
- `/vendas`: rota para visualização de informações de vendas
- `/rcas`: rota para visualização de informações de RCAs (Representantes Comerciais Autônomos)
- `/campanhas`: rota para visualização, criação, atualização e remoção de campanhas

As informações são recuperadas a partir do banco de dados e podem ser acessadas pelo frontend através de requisições HTTP assíncronas usando a biblioteca Axios.

## Contribuição

Se você quiser contribuir para este projeto, por favor, siga os passos abaixo:

1. Crie um fork deste repositório
2. Crie um branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Faça as alterações necessárias e adicione testes, se possível
4. Commit as alterações (`git commit -m 'Adicionando MinhaFeature'`)
5. Envie o branch (`git push origin feature/MinhaFeature`)
6. Abra uma pull request

## Autores

- [@gustavoabreu02](https://www.github.com/gustavoabreu02)
