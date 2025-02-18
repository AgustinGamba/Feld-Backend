# Feld Backend

Feld backend developed in nodeJS + Express

## How to run

Create an `.env` file using `.env.example` as a template

To run this project use the following commands:

- Install the dependencies with `npm i`
- Run the project with `npm run start` or start it in dev mode with `npm run dev`
- If you want to run the tests use `npm run test`

## Requests

Here's a list of some of the request that you can run with this project

Send an email

Create a card

```
curl -XPOST -H "Content-type: application/json" -d '{
"name": "Agustin",
"email": "agustin.o.gamba@gmail.com",
"message": "Test"
}' 'http://localhost:3000/email'
```

Activate a card

```
curl -XPOST 'http://localhost:3000/api/cards/activate-card/1'
```

Get a specific card by id

```
curl -X GET http://localhost:3000/cards/:id
```

Send a support request:

```
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Your Name",
  "email": "your.email@example.com",
  "message": "This is a support request."
}' http://localhost:3000/support
```

## TODOs:

- Linter
- Prettier
- Tests
- A DB (Postgres) if needed 
- An ORM (Prisma) if needed
- A schema validator (AJV/Zod)
- Swagger
- A logger (Winston/Pino)
- A better error handler
- Dockerization
