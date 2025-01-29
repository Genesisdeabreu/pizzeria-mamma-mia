import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pizza from "./components/Pizza";
// import Cart from "./components/Cart";
// import Home from "./components/Home";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;