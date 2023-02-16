import React, { useState } from "react";
import EditInstructorForm from "./EditInstructorForm";

import {
  Alert,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

function InstructorCard({
  instructor,
  onInstructorDelete,
  onInstructorEdit,
  currentUser,
}) {
  const [errors, setErrors] = useState([]);
  const [showInstEditForm, setShowInstEditForm] = useState(false);

  const handleInstructorDelete = () => {
    fetch(`/instructors/${instructor.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        onInstructorDelete(instructor.id);
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <>
      {currentUser.email === "admin@admin.com" ? (
        <>
          <Card
            key={instructor.id}
            className="text-center"
            style={{
              margin: "20px",
              backgroundColor: "#272730",
              color: "#929292",
              width: "30rem",
              borderColor: "#272730",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <CardImg
              alt="Instructor Photo"
              src={instructor.image}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                {instructor.first_name} {instructor.last_name}
              </CardTitle>
              <CardText>{instructor.about}</CardText>
              <Button
                onClick={() => {
                  setShowInstEditForm(!showInstEditForm);
                }}
                size="lg"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                {showInstEditForm ? (
                  <span>
                    <i className="bi-dash-square"></i>
                  </span>
                ) : (
                  <span>
                    <i className="bi-pencil-square"></i>
                  </span>
                )}{" "}
              </Button>
              {"  "}
              <Button
                onClick={() => handleInstructorDelete(instructor.id)}
                size="lg"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                <span>
                  <i className="bi-trash"></i>
                </span>{" "}
              </Button>
            </CardBody>
            {errors
              ? errors.map((e) => <Alert color="danger">{e}</Alert>)
              : null}
            <CardBody style={{ backgroundColor: "#272730" }}>
              {showInstEditForm ? (
                <EditInstructorForm
                  instructor={instructor}
                  onInstructorEdit={onInstructorEdit}
                  showInstEditForm={showInstEditForm}
                  setShowInstEditForm={setShowInstEditForm}
                />
              ) : null}
            </CardBody>
          </Card>
        </>
      ) : (
        <>
          <Card
            className="text-center"
            style={{
              margin: "20px",
              backgroundColor: "#272730",
              color: "#929292",
              width: "30rem",
              borderColor: "#272730",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <CardImg
              alt="Instructor Photo"
              src={instructor.image}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                {instructor.first_name} {instructor.last_name}
              </CardTitle>
              <CardText>{instructor.about}</CardText>
            </CardBody>
            {errors
              ? errors.map((e) => <Alert color="danger">{e}</Alert>)
              : null}
          </Card>
        </>
      )}
    </>
  );
}
// <Card
//   className="text-center"
//   style={{
//     margin: "20px",
//     backgroundColor: "#272730",
//     color: "#929292",
//     width: "30rem",
//     borderColor: "#272730",
//   }}
// >
//   <CardImg
//     alt="Instructor Photo"
//     src={instructor.image}
//     top
//     width="100%"
//   />
//   <CardBody>
//     <CardTitle tag="h5">
//       {instructor.first_name} {instructor.last_name}
//     </CardTitle>
//     <CardText>{instructor.about}</CardText>
//     <Button
//       onClick={() => {
//         setShowInstEditForm(!showInstEditForm);
//       }}
//       size="lg"
//       style={{
//         backgroundColor: "#583d59",
//         borderColor: "#583d59",
//         color: "#c6bcdb",
//         borderRadius: "0",
//       }}
//     >
//       {showInstEditForm ? (
//         <span>
//           <i className="bi-dash-square"></i>
//         </span>
//       ) : (
//         <span>
//           <i className="bi-pencil-square"></i>
//         </span>
//       )}{" "}
//     </Button>
//     {"  "}
//     <Button
//       onClick={() => handleInstructorDelete(instructor.id)}
//       size="lg"
//       style={{
//         backgroundColor: "#583d59",
//         borderColor: "#583d59",
//         color: "#c6bcdb",
//         borderRadius: "0",
//       }}
//     >
//       <span>
//         <i className="bi-trash"></i>
//       </span>{" "}
//     </Button>
//   </CardBody>
//   {errors ? errors.map((e) => <Alert color="danger">{e}</Alert>) : null}
//   <CardBody style={{ backgroundColor: "#272730" }}>
//     {showInstEditForm ? (
//       <EditInstructorForm
//         instructor={instructor}
//         onInstructorEdit={onInstructorEdit}
//         showInstEditForm={showInstEditForm}
//         setShowInstEditForm={setShowInstEditForm}
//       />
//     ) : null}
//   </CardBody>
// </Card>
//   );
// }

export default InstructorCard;
