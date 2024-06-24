import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Flipit!</h1>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/product/:id" element={<Products />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
