class JokeClass {
    #setup;
    #delivery;
    #category;
  
    constructor(setup, delivery, category) {
      this.setup = setup;
      this.delivery = delivery;
      this.category = category;
    }
  
    get category() {
      return this.#category;
    }
  
    get setup() {
      return this.#setup;
    }
  
    get delivery() {
      return this.#delivery;
    }
  
    set setup(value) {
      this.#setup = value;
    }
  
    set category(value) {
      this.#category = value;
    }
  
    set delivery(value) {
      this.#delivery = value;
    }
  }