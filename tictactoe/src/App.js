import Jatekter from "./komponens/Jatekter";
import "./App.css";
import TicTacToeModel from "./model/TicTacToeModel.js";
import {useState} from "react";

const tmodel = new TicTacToeModel()

function App() {
  const [lista,setLista] = useState([...tmodel.getLista()]);


  function katt(index) {
    console.log(index);
    tmodel.setLista(index)
    setLista([...tmodel.getLista()])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>TICTACTOE</h1>
      </header>
      <article>
        <Jatekter katt={katt} lista={lista} />
      </article>
    </div>
  );
}

export default App;
