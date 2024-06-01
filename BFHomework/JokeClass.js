class JokeClass {

 

    #category

    #setup

    #delivery

 

    constructor(category, setup, delivery) {

        this.#setup = setup

        this.#category = category

        this.#delivery = delivery

    }

 

    get delivery() {

        return this.#delivery

    }

    get category() {

        return this.#category

    }

    get setup() {

        return this.#setup

    }

    set category(newCategory) {

        this.#category = newCategory

    }

    set delivery(newDelivery) {

        this.#delivery = newDelivery

    }

    set setup(newSetup) {

        this.#setup = newSetup

    }

 

 

}