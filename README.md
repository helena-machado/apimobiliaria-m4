# APImobiliaria

Projeto de encerramento do módulo 4 do curso de Desenvolvimento Web da Resilia Educação.
O projeto consiste na criação de uma API para uma imobiliaria, onde cada um dos membros do grupo ficou responsável por uma entidade e criação das rotas da mesma.

## Requerimentos

- Node v16+

## Dependências

```json
{
  "dependencies": {
    "bcrypt": "^5.0.1",
    "express": "^4.17.3",
    "sequelize": "^6.17.0",
    "sqlite3": "^5.0.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

## Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Iniciando o projeto

Inicie o terminal em sua máquina e siga o passo a passo abaixo:

- Clone o repositório:

```bash
  git clone https://github.com/helena-machado/apimobiliaria-m4.git
```

- No terminal, acesse a pasta do projeto:

```bash
  cd apimobiliaria-m4
```

- Instale as dependências necessárias:

```bash
  npm install
```

- Inicie o servidor com o comando abaixo:

```bash
  npm run start
```

## Populando o banco de dados

O projeto conta com um arquivo que popula o banco de dados. Caso queira iniciar o projeto com o banco populado, então:

- Em uma nova janela do terminal (dentro do diretório do projeto), rode o comando:

```bash
  npm run seed
```

## Estrutura da API

A API segue o padrão REST e utiliza os verbos HTTP: GET, POST, PUT e DELETE. Ao iniciar o arquivo em sua máquina, a url base será http://localhost:{port}, sendo _port_ a porta 3001, por padrão. Para testar a API, utilize do software de sua preferência acessando a url acima informada (com a porta definida) e seguida pelas rotas abaixo.

### Usuários

Foram criados endpoints para lidar com as operações de CRUD para os usuários.

#### GET

```http
  /user
```

Retorna as informações de todos os usuários, exceto as senhas.

```http
  /user/{id}
```

Retorna as informações do usuário com a _id_ informada, exceto a senha. Caso o usuário com a _id_ informada não exista, é retornado um erro com status 404.

#### POST

```http
  /user
```

Cria e retorna um novo usuário no banco de dados. Será necessário enviar um body no formato **JSON** com as seguintes informações:

```json
{
  "nome": "",
  "sobrenome": "",
  "cpf": "",
  "email": "",
  "senha": "",
  "cidade": "",
  "cargo": ""
}
```

Considerações relevantes:

- O preenchimento de todos os campos é obrigatório.
- O campo **cpf** deve ser preenchido apenas pelos 11 números que o compõe.
- O campo e-mail deve ser completado por um nome e por um domínio.
- A senha retornada será diferente da informada, pois estará encriptada.
- O campo **cargo** aceita apenas as seguintes opções: _Corretor_ ou _Corretora_, _Usuário_ ou _Usuária_ e _Admnistrador_ ou _Admnistradora_.

#### PUT

```http
  /user/{id}
```

Atualiza os dados do usuário com a _id_ informada e retorna as novas informações, exceto a senha. Será necessário fornecer um body no formato **JSON** contendo o preenchimento de todos os campos.

```json
{
  "nome": "",
  "sobrenome": "",
  "cpf": "",
  "email": "",
  "senha": "",
  "cidade": "",
  "cargo": ""
}
```

#### DELETE

```http
  /user/{id}
```

Remove o usuário com a _id_ informada e retorna uma mensagem de sucesso. Caso o usuário com a _id_ informada não exista, é retornado um erro com status 404.

## Desenvolvido por

- [Helena Machado](https://github.com/helena-machado)

Encontre-me também em:

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/helenamachadop/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:helena.machado.hm@gmail.com)
