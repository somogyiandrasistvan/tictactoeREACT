class TicTacToeModel {
  #lista = [];
  #allapot = "X";
  constructor() {
    this.#lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  }
  getLista() {
    return [...this.#lista];
  }
  setLista(index) {
    this.#lista[index] = this.#allapot;
    if (this.#allapot === "X") {
      this.#allapot = "O";
    } else {
      this.#allapot = "X";
    }
  }
}

export default TicTacToeModel;
