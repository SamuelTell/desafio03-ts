import { api } from "../api";

export const login = async (
  email: string,
  senha: string
): Promise<boolean | string> => {
  const data: any = await api;

  if (email !== data.email) {
    return false;
  }

  if (senha !== data.password) {
    return false;
  }

  return data.name;
};
