import { login } from "./login";

describe("login", () => {
  const mockEmail = "nath@dio.bank";
  const mockSenha = "123456";
  it("Deve exibir um alert com boas vindas caso o email e senha sejam válidos", async () => {
    const response = await login(mockEmail, mockSenha);
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o email ou senha sejam inválidos", async () => {
    const response = await login("email@invalido.com", "123");
    expect(response).toBeFalsy();
  });
});
