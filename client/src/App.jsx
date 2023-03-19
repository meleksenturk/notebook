import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddNotePage from "./pages/AddNotePage";
import NotePage from "./pages/NotePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {


  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/notes" element={<NotePage />}></Route>
          <Route path="/add-note" element={<AddNotePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>

      

    </>

  );
}

export default App;
