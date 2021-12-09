import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import { TodoProvider } from "./context/TodoContext"

function App() {

  return (
    <div className="container">
      <TodoProvider>
        <Header />
        <Tasks />
      </TodoProvider>
    </div>
  );
}

export default App;
