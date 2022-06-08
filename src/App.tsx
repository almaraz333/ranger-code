import { Contact, Header, HeroImage, MyPhilosophy, WhatWeDo, WhoWeAre } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <HeroImage />
      <WhoWeAre />
      <WhatWeDo />
      <MyPhilosophy />
      <Contact />
    </div>
  );
}

export default App;
