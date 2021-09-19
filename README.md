# VentureClass
Projeto realizado em node e react, com banco de dados Sqlite3.

## 1º passo: (Front - React - localhost:3000)
Vá na pasta venture-class (cd venture-class) e dê o seguinte comando:
`npm install` - ele irá instalar o: react, react-router-dom, e o styled-components.

## 2º passo: (Back - NodeJS - localhost:5000)
voltando para a pasta principal (cd..), dê o mesmo comando:
`npm install` - ele irá instalar o: express, sqlite3, concurrently e o nodemon.

# Explicação das Bibliotecas:
- [syled-components](https://styled-components.com/) auxiliar na parte de estilização.

- [react-router-dom](https://www.npmjs.com/package/react-router-dom) auxilo nas rotas, para o React.

- [Sqlite3](https://www.npmjs.com/package/sqlite3) banco de dados que utilizei para guardar as informações.

- [Express](https://www.npmjs.com/package/express) para me auxiliar na rota, para pegar as informações. 

- [Nodemon](https://www.npmjs.com/package/nodemon) para me auxiliar na parte de desenvolvimento. (com isso consigo somente rodar a parte Back usando o seguinte comando: npm run devNode)

- [Concurrently](https://www.npmjs.com/package/concurrently) auxilio para quando eu dar o seguinte comando: `npm run dev` ele irá abrir tanto o node quanto o react! 

# Abrindo Projeto:
Basta abrir o terminar e dar o seguinte comando: `npm run dev` ou `npm start`