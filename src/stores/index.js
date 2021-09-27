import home from '~s/home';

class Stores {
  constructor() {
    this.storage = localStorage;

    this.homeStore = new home(this);
  }
}

export default new Stores();