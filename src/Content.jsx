import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { Modal } from "./Modal";

export function Content() {
  const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});

  const handleShowResume = (resume) => {
    console.log("handleShowResume", resume);
    setIsPhotosShowVisible(true);
    setCurrentPhoto(resume);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsPhotosShowVisible(false);
  };

  useEffect(handleShowResume, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Modal show={isPhotosShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
