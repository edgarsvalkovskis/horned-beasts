import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import data from "./assets/beast-data.json";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownBeast] = useState({});
  const [horns, setHorns] = useState("");

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  function handleChange(event) {
    setHorns(event.target.value);
  }

  return (
    <div>
      <h1>Form</h1>
      <form>
        <label>Number of HORNS</label>
        <input name="horns" onChange={handleChange} />
      </form>
      <Header />
      <Gallery data={data} handleShowModal={handleShowModal} horns={horns} />
      <Footer />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}
