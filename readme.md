# API Documentation

## Installation

You will need run for installing the dependecies.
```bash
npm install
```

## Running

We just can run `npm run dev`

## Documentation

### Resources
1. `users`
2. `admins`

#### NOTE
> For manipulate those data, you must to be authenticated with token JWT - Json Web Token. For this, I recommend you request (POST) on this URL: `http://localhost:3000/admin/auth`; `locahost` because you are running in your development environment, that's your machine.

### GET Method

For *users*, you put this in your URL: `http://localhost:3000/users`
---

```
[
  {
    "id": "0379d0ab-36b6-48a8-9952-31720cacf341",
    "email": "thayna@gmail.com"
  },
  {
    "id": "043b8470-a9d0-40af-ad71-7e7227456325",
    "email": "regina@gmail.com"
  },
  {
    "id": "17e449d0-764c-44f3-984a-e988a4cc78ce",
    "email": "yurifullstack@gmail.com"
  },
  {
    "id": "1a979b43-b7fb-40aa-8f7f-d347eb0e190d",
    "email": "palloma@gmail.com"
  },
  {
    "id": "1acd42c0-7941-4cc9-826d-76214b0c4c42",
    "email": "josafa@google.com"
  },
  {
    "id": "4f254acf-b7f7-44e3-90ff-365ce44c64d0",
    "email": "isabella@gmail.com"
  },
  {
    "id": "552080d9-435c-44bd-9bb2-ff3694dd775d",
    "email": "mychel@google.com"
  },
  {
    "id": "60970b7e-c25b-4c7f-9171-d76fd7275971",
    "email": "carolina@gmail.com"
  },
  {
    "id": "8641b541-c757-49ea-8d95-15ea7a812c60",
    "email": "maria@gmail.com"
  },
  {
    "id": "ba87bb11-05a5-4170-af4a-ccfbb9d705ba",
    "email": "benedita@gmail.com"
  },
  {
    "id": "e69a622f-d20f-43fb-93a3-81e19edb6ab0",
    "email": "brenda@gmail.com"
  }
]
```
For *admins*, you put this in your URL: `/admins`
```
[
  {
    "idAdmin": "7b7377a1-1b65-4bba-b526-3ea7f91033ca",
    "name": "Yuri",
    "description": "fafafdfdfs",
    "email": "teste@teste.com",
    "currentDate": "2020-10-17"
  }
]
```