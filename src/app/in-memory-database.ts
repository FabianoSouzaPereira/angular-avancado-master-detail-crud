import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, name: 'Moradia', descrição: 'Pagamentos de Contas da Casa' },
      { id: 2, name: 'Saúde', descrição: 'Plano de Saúde e Remédios' },
      { id: 3, name: 'Lazer', descrição: 'Cinema, parques, praia, etc' },
      { id: 4, name: 'Salário', descrição: 'Recebimento de Salário' },
      { id: 5, name: 'Freelas', descrição: 'Trabalho como freelancer' }
    ];

    return { categories }
  }
}
