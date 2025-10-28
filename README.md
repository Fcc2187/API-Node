# ⚙️ API CRUD de Usuários - Node.js & MySQL

<div align="center">
  <img width="200" alt="Logo do Node.js, Express e MySQL" src="https://github.com/user-attachments/assets/b8b80159-f242-4f9a-8b84-3c66f54c9d53" />
</div>

## 📄 Sobre o Projeto

Este é o projeto de uma **API RESTful** simples construída com Node.js, Express e um banco de dados MySQL.

O objetivo principal é fornecer um backend robusto para as quatro operações básicas de **CRUD (Create, Read, Update, Delete)** para um cadastro de usuários.

O projeto foi desenvolvido seguindo boas práticas de segurança, como o uso de **variáveis de ambiente** (`.env`) para proteger as credenciais do banco de dados e **consultas parametrizadas** (`?`) para prevenir ataques de SQL Injection.

---

### ✨ Funcionalidades Principais

* **`[POST] /users`**: Cria um novo usuário no banco de dados.
* **`[GET] /users`**: Retorna a lista completa de todos os usuários.
* **`[PUT] /users/:id`**: Atualiza um usuário existente com base no seu `id`.
* **`[DELETE] /users/:id`**: Deleta um usuário com base no seu `id`.
* **🔐 Segurança:** As credenciais do banco não ficam expostas no código, sendo carregadas a partir de um arquivo `.env`.
* **📊 Validação:** Retorna os códigos de status HTTP corretos para cada situação (ex: `201`, `204`, `400`, `404`, `500`).

---

### 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

* **[Node.js](https://nodejs.org/):** Ambiente de execução do JavaScript no backend.
* **[Express.js](https://expressjs.com/pt-br/):** Framework para a construção da API e gerenciamento das rotas.
* **[MySQL2 (mysql2/promise)](https://github.com/sidorares/node-mysql2):** Driver otimizado para a conexão entre o Node.js e o banco MySQL, com suporte a Promises/Async-Await.
* **[Dotenv](https://github.com/motdotla/dotenv):** Para carregar as variáveis de ambiente a partir do arquivo `.env`.
* **[Git & GitHub](https://github.com/):** Para versionamento de código.

---
