export interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

export interface ILogin {
  id?: number;
  username: string;
  password: string;
}

export interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IData {
  email: string;
  password: string;
}

export interface IVendas {
  // user?: string,
  // username?: string,
  // id?: number,
  // userId?: number,
  // productsIds: number[],
  cliente: string,
  fornecedor: string,
  representante: string,
  supervisor: string,
  departamento: string,
  seção: string,
  linha: string,
  produto: string,
  qtVenda: string,
  qtCaixa: string,
  venda: string,
  mês: string,
  ano: number,
  cidade: string;
}

export interface ISup {
  codSup: number,
  mes: string;
}