import PocketBase from "pocketbase";
import installPocketBase from "pocketbase-installer";
import { TypedPocketBase } from "./pocketbase-types";

type PocketStackConfig = {
  install?: boolean;
  url?: string;
};

export default class PocketStack {
  public pb: TypedPocketBase;

  constructor({
    install,
    url = "http://127.0.0.1:8090",
  }: PocketStackConfig = {}) {
    if (install) {
      this.setup();
    }
    this.pb = new PocketBase(url) as TypedPocketBase;
  }

  async setup() {
    await installPocketBase();
  }
}
