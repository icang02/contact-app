import Contact from "./pages/Contact";
import ContactAdd from "./pages/ContactAdd";
import ContactEdit from "./pages/ContactEdit";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/contacts/add" element={<ContactAdd />} />
        <Route path="/contacts/:id" element={<ContactEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
