import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { Modal } from "./Modal";
import { StudentShow } from "./StudentShow";

export function Content() {
  const [isStudentShowVisible, setIsStudentShowVisible] = useState(false);
  // const [currentstudent, setCurrentstudent] = useState({});

  const [currentStudent, setCurrentStudent] = useState({
    first_name: "Brenda",
    last_name: "Smith",
    email: "test@email.com",
    phone_number: 5555555555,
    short_bio:
      "Cupcake ipsum dolor sit amet chocolate muffin gummies jelly. Sesame snaps danish sesame snaps liquorice I love marshmallow. Sweet roll icing candy canes muffin candy candy canes brownie. Dessert I love chocolate bar bonbon cake cake I love.",
    linkedin_url: "test@linkedin.com",
    twitter_handle: "@brenda_smith",
    personal_url: "personal_site@test.com",
    resume_url: "student@test.com",
    github_url: "brenda@github.com",
    photo: "photo.image.url",
  });

  const handleShowStudent = (student) => {
    console.log("handleShowStudent", student);
    setIsStudentShowVisible(true);
    setCurrentStudent(student);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsStudentShowVisible(false);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentShow student={currentStudent} />} />
      </Routes>
      <Modal show={isStudentShowVisible} onClose={handleClose}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
