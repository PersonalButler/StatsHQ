import StatsStore from "./StatsStore";

class MasterStore {
  constructor() {
    this.StatsStore = StatsStore;
  }
}

export const masterStore = new MasterStore();