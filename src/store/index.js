import { makeAutoObservable } from "mobx";
import { fetchImages } from "../actions/images";
class Store {
  images = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetch() {
    this.loading = true;
    this.images = await fetchImages();
    this.loading = false;
  }
}
const store = new Store();
export default store;
