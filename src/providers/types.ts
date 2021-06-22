export interface IService {
  getInfos(): Promise<Data[]>;
}

export interface Data {
  letter: string;
  number: number;
}
