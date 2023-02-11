import "./App.css";
import React from "react";
import PracticeFormBackdrop from "./components/PracticeFormBackdrop";
import PracticeFormModal from "./components/PracticeFormModal";

function App() {
  return (
    <div>
      <h1> Practice Tracker </h1>
      <PracticeFormBackdrop />
      <PracticeFormModal />
    </div>
  );
}

export default App;
