import PocketBase from "pocketbase";
import installPocketBase from "pocketbase-installer";

export default class PocketStack {
  pb: PocketBase;

  constructor() {
    this.pb = new PocketBase("http://127.0.0.1:8090");
  }

  async setup() {
    await installPocketBase();
  }
}
