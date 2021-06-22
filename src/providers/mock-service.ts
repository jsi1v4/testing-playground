import { IService, Data } from "./types";

export class Service implements IService {
  async getInfos(): Promise<Data[]> {
    const req = await import("../mocks/infos.json");
    return req.data;
  }
}
