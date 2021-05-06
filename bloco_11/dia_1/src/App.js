// import logo from './logo.svg';
import './App.css';
// import Component from'./Component' //referente ao conteúdo dia 1

const compromissos = ['estudar', 'comer', 'jogar', 'assistir série', 'dormir']; //conteúdo referente ao primeiro dia

const task = (...value) => { //conteúdo referente ao primeiro dia
  return (
    value.map((element) => <li>{element}</li>)
  );
}

function App() {
  return (
    <div>

      {task(...compromissos)} {/* conteúdo refente ao primeiro dia */}
    </div>
    // <Component/> //referente ao conteúdo
  );
}

export default App;
