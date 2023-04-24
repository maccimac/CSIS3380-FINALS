
import './App.css';
import { Routes, Route } from "react-router-dom";
import BookList from "./views/BookList"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
