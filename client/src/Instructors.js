import { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import InstructorCard from "./InstructorCard";
import AddNewInstructorForm from "./AddNewInstructorForm";

function Instructors({ currentUser }) {
  const [showForm, setShowForm] = useState(true);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("/instructors")
      .then((r) => r.json())
      .then((data) => setInstructors(data));
  }, []);

  function onAddedInstructor(newInstructor) {
    setInstructors([...instructors, newInstructor]);
  }

  const onInstructorEdit = (updatedInstructor) => {
    const instructorsAfterEdit = instructors.map((instructor) =>
      instructor.id === updatedInstructor.id ? updatedInstructor : instructor
    );
    setInstructors(instructorsAfterEdit);
  };

  const onInstructorDelete = (instructorId) => {
    const instructorsAfterDelete = instructors.filter(
      (instructor) => instructor.id !== instructorId
    );
    setInstructors([...instructorsAfterDelete]);
  };

  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <>
      {currentUser.email === "admin@admin.com" ? (
        <>
          <Container fluid style={{ backgroundColor: "#929292" }}>
            <Row >
              <Row >
                <Col >
                  {showForm ? (
                    <Button
                      onClick={handleShowForm}
                      size="lg"
                      style={{
                        backgroundColor: "#583d59",
                        borderColor: "#583d59",
                        color: "#c6bcdb",
                        borderRadius: "0",
                        margin: "10px",
                      }}
                    >
                      Add New Instructor
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={handleShowForm}
                        size="lg"
                        style={{
                          backgroundColor: "#583d59",
                          borderColor: "#583d59",
                          color: "#c6bcdb",
                          borderRadius: "0",
                          margin: "10px",
                        }}
                      >
                        <i className="bi-dash-square"></i>
                      </Button>
                      <AddNewInstructorForm
                        onAddedInstructor={onAddedInstructor}
                        showForm={showForm}
                        setShowForm={setShowForm}
                      />
                    </>
                  )}
                </Col>
              </Row>

              {instructors.map((instructor) => (
                <Col className="col d-flex justify-content-center">
                  <InstructorCard
                    key={instructor.id}
                    instructor={instructor}
                    onInstructorEdit={onInstructorEdit}
                    onInstructorDelete={onInstructorDelete}
                    currentUser={currentUser}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Container fluid style={{ backgroundColor: "#929292" }}>
            <Row>
              {instructors.map((instructor) => (
                <Col className="col d-flex justify-content-center">
                  <InstructorCard
                    key={instructor.id}
                    instructor={instructor}
                    onInstructorEdit={onInstructorEdit}
                    onInstructorDelete={onInstructorDelete}
                    currentUser={currentUser}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default Instructors;
