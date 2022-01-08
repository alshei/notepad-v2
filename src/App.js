import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./screens/LandingPage";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MyNotes from "./screens/MyNotes";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="selection:bg-apricot selection:text-white overflow-x-hidden">
          <Header />
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/mynotes" component={() => <MyNotes />} />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
