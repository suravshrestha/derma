import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Navbar from "./components/NavBar";
import SignupForm from "./components/SignupForm";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <section className="section">
        <Routes>
          <Route path="/" element={<SignupForm />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
