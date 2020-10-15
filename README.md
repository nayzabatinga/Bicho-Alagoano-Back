# Bicho-Alagoano-Back

### Tecnologia utilizada
-- Node com TypeScript utilizando Functions Firebase
-- Conexão com Firebase

## Back-end
Todo o conteúdo relacionado ao back-end está disponível na branch master

**Considerações**
- O back-end foi realizado em Node.js com Typescript.
- Antes de começar, inicialize o npm para que as depencias possam ser utilizadas, rodando no terminal o comando:
`````
npm init -y
`````

#### Rotas disponíveis
 
- Registrar Usuário 
`````
POST /registerUser
Body: {
    "email": "seu@email.com",
    "password": "suasenha",
    "role": "sua caracteristica no sistema [admin, client]"
}
`````

- Adicionar imagem, nome e o telefone do Pet
`````
POST /registerPet
Body:{
    "name": "nome do pet",
    "owner": "nome do dono",
    "phone": "telefone do dono",
    "avatar": "filepath",
    "filename": "filename"
}
`````

- Listar todos os Pet's registrados
`````
GET /listPet
`````

- Excluir todos os dados registrados do Pet
`````
DELETE /deletePet/?id=""
`````

#### Para inicializar

- Em desenvolvimento rode o comando abaixo no terminal 
``````
firebase serve
``````

- Em produção rode o comando abaixo no terminal
``````
npm run deploy
``````
