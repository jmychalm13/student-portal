import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { Modal } from "./Modal";

export function Content() {
  const [isResumeShowVisible, setIsResumeShowVisible] = useState(false);
  const [currentResume, setCurrentResume] = useState({});

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsResumeShowVisible(true);
    setCurrentResume(resume);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsResumeShowVisible(false);
  };

  useEffect(handleShowResume, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Modal show={isResumeShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
