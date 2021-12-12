import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Todos from './components/Todos';
import { TodoProvider } from "./context/TodoContext"

function App() {

  return (
    <div className="container">
      <TodoProvider>
        <Header />
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
