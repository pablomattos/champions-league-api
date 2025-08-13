# ⚽ Champions league API

## 🚀 API para informações e gerenciamento da Champions League

### 📋 Pré-requisitos

- Instalar Node.js  
  [Download Node.js](https://nodejs.org/en/download/prebuilt-installer/current)

### 🔧 Instalação

- **Passos:**
    * Copie a URL do repositório (você pode escolher entre HTTPS ou SSH).  
      Exemplo de URL: `https://github.com/usuario/projeto-champions-league.git`
    * Abra o Terminal ou Git Bash no seu computador.
    * Altere o diretório de trabalho atual para o local onde deseja ter o diretório clonado.
    * Digite o comando `git clone` seguido da URL que você copiou.  
      Exemplo:  
      ```bash
      git clone https://github.com/usuario/projeto-champions-league.git
      ```

- **Na IDE:**
    * Abra o terminal.
    * Localize a pasta onde o projeto foi clonado.
    * Digite: `npm install` (para instalar as dependências).  
    * Para rodar o projeto em modo de desenvolvimento:  
      ```bash
      npm run start:dev
      ```
    * Para rodar o projeto em modo de observação:  
      ```bash
      npm run start:watch
      ```
    * Para gerar e executar a versão de distribuição:  
      ```bash
      npm run start:dist
      ```

---

### 📚 Ações disponíveis nas APIs

> Base URL: `/api`  
> CORS habilitado.

#### 🏟️ Clubs
- **GET `/api/clubs`** — Lista todos os clubes.  
  **Exemplo de resposta:**
  ```json
  [
    { "id": 1, "name": "Paris Saint-Germain" },
    { "id": 2, "name": "Inter Milan" },
    { "id": 3, "name": "Arsenal" }
  ]
  ```

#### 👟 Players
- **GET `/api/players`** — Lista todos os jogadores.
- **GET `/api/players/:id`** — Busca um jogador pelo ID.
- **POST `/api/players/:id`** — Cria um jogador (rota aceita um `id` na URL).  
  **Body (exemplo):**
  ```json
  {
    "id": 14,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 94,
      "Pace": 85,
      "Shooting": 92,
      "Passing": 91,
      "Dribling": 96,
      "Defending": 35,
      "Physical": 65
    }
  }
  ```
- **PATCH `/api/players/:id`** — Atualiza **apenas as estatísticas** de um jogador.  
  **Body (StatisticsModel):**
  ```json
  {
    "Overall": 90,
    "Pace": 80,
    "Shooting": 88,
    "Passing": 86,
    "Dribling": 89,
    "Defending": 40,
    "Physical": 70
  }
  ```
- **DELETE `/api/players/:id`** — Remove um jogador pelo ID.

#### 🔁 Códigos de status (resumo)
- `200 OK` — Requisição bem-sucedida / retorno de dados
- `201 Created` — Recurso criado com sucesso (ex.: POST player)
- `204 No Content` — Sem conteúdo para retornar
- `400 Bad Request` — Requisição inválida

#### 💡 Exemplos com `curl`
```bash
# Listar clubes
curl -X GET http://localhost:3000/api/clubs

# Listar jogadores
curl -X GET http://localhost:3000/api/players

# Buscar jogador por ID
curl -X GET http://localhost:3000/api/players/1

# Criar jogador (POST com id na rota)
curl -X POST http://localhost:3000/api/players/14   -H "Content-Type: application/json"   -d '{
    "id": 14,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 94, "Pace": 85, "Shooting": 92, "Passing": 91, "Dribling": 96, "Defending": 35, "Physical": 65
    }
  }'

# Atualizar estatísticas do jogador
curl -X PATCH http://localhost:3000/api/players/14   -H "Content-Type: application/json"   -d '{
    "Overall": 90, "Pace": 80, "Shooting": 88, "Passing": 86, "Dribling": 89, "Defending": 40, "Physical": 70
  }'

# Deletar jogador
curl -X DELETE http://localhost:3000/api/players/14
```

## 🛠️ Construído com

- [Visual Studio Code](https://code.visualstudio.com/download)  
  _Obs.: Você pode usar a IDE de sua preferência._

- Tecnologias:  
  * [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
  * [Node.js](https://nodejs.org/)  
  * [TypeScript](https://www.typescriptlang.org/)  
  * [Express](https://expressjs.com/)  
  * [CORS](https://www.npmjs.com/package/cors)

## ✒️ Autor

* **Pablo Moraes De Mattos** - [LinkedIn](https://www.linkedin.com/in/pablomoraesdemattos/)
