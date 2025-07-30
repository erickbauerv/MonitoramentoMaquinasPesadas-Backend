# Monitoramento de Máquinas Pesadas - Backend

## Sobre o projeto

O projeto foi desenvolvido como parte do processo seletivo da Concert Technologies, o objetivo do projeto é desenvolver um sistema de monitoramento de máquinas pesadas utilizando telemetria, o back-end da aplicação foi desenvolvido com TypeScript, Node, Nest e Sqlite. O front-end do projeto está em https://github.com/erickbauerv/MonitoramentoMaquinasPesadas-FrontEnd

## Funcionalidades

O projeto consiste em uma API Restful com endpoints para o gerenciamento de máquinas permitindo fazer consultas, consultas por id, cadastro e atualização mantendo os dados em um banco sqlite.

### GET /maquinas:

Lista todas as máquinas cadastradas. Permite filtrar por status (`operando`, `parada`, `desligada`).

Exemplo de requisição:

```bash
GET /maquinas
GET /maquinas?status=operando
```

Resposta:

```bash
[
  {
    "id": 1,
    "nome": "Máquina A",
    "localizacao": "Fábrica 1",
    "status": "operando"
  },
  ...
]
```

### GET /maquinas/:id

Retorna os detalhes de uma máquina específica com base no id.

Exemplo de requisição:

```bash
GET /maquinas/1
```

Resposta:

```bash
{
  "id": 1,
  "nome": "Máquina A",
  "localizacao": "Fábrica 1",
  "status": "operando"
}
```

### POST /maquinas

Cadastra uma nova máquina.

```bash
{
  "nome": "Máquina A",
  "localizacao": "Fábrica 1",
  "status": "operando"
}
```

Resposta:

```bash
{
  "id": 1,
  "nome": "Máquina A",
  "localizacao": "Fábrica 1",
  "status": "operando"
}
```

### PUT /maquinas/:id

Atualiza dados de uma máquina existente (ex: status ou localização) com base no id.

Body (JSON):

```bash
{
  "localizacao": "Nova Fábrica",
  "status": "parada"
}
```

Resposta:

```bash
{
  "id": 1,
  "nome": "Máquina A",
  "localizacao": "Nova Fábrica",
  "status": "parada"
}
```

## Instalação do projeto

1 - Clonar o repositório com `git clone https://github.com/erickbauerv/MonitoramentoMaquinasPesadas-Backend.git`

2 - Na pasta do projeto rodar o comando `npm install` para instalar as dependências do projeto

3 - Para rodar a aplicação utilizar o comando `npm run start` ou `npm run start:dev`

4 - A aplicação estará disponível em  [http://localhost:3000](http://localhost:4200/)
