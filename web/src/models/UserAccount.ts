export interface IUserAccount {
  name: string;
  lastname: string;
  email: string;
}
export function shapeUserAccount(
  name: string,
  lastname: string,
  email: string
): IUserAccount {
  return { name, lastname, email };
}
