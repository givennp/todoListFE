import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoPage from "./pages/todos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
