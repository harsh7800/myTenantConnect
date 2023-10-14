import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navabar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Greet from "./components/greet/Greet";
import Contact from "./components/contact-us/Contact";
import Step1 from "./components/application-status/Step1";
import Step2 from "./components/application-status/Step2";
import Step3 from "./components/application-status/Step3";
import Step4 from "./components/application-status/Step4";
import Application_Status from "./components/application-status/Application-Status";
import Stepper from "./components/application-status/Stepper";
import Steps from "./components/home/Steps";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Greet />} path="/greet" />
        <Route element={<Contact />} path="/contact-us" />
        <Route element={<Application_Status />} path="/Application-Status" />
        <Route element={<Steps />} path="/steps/*" />
        {/* <Route element={<Step2 />} path="/step2" /> */}
        {/* <Route element={<Step3 />} path="/step3" /> */}
        {/* <Route element={<Step4 />} path="/step4" /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
