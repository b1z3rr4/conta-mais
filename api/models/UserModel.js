let users = [
  {
    id: "1234",
    email: "dadomocado@gmail.com",
    cpf: 12345678,
    password: "senhateste123",
  },
  {
    id: "4321",
    email: "dadomocado@gmail.com",
    cpf: 12345678,
    password: "senhateste123",
  },
];

class UserModel {
  id;
  email;
  cpf;
  password;

  constructor(id, email, cpf, password) {
    this.id = id;
    this.email = email;
    this.cpf = cpf || undefined;
    this.password = password;
  }
}

function postUser(user) {
  users.push(user);
}

function putUser(data) {
  users = data;
}
function deleteUsers(data) {
  users = data;
}

function getUsers() {
  return users;
}
