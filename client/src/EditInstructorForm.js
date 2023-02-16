import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";

function EditInstructorForm({ instructor, onInstructorEdit, showInstEditForm, setShowInstEditForm }) {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const [instructorFormData, setInstructorFormData] = useState({
    first_name: instructor.first_name,
    last_name: instructor.last_name,
    about: instructor.about,
    image: instructor.image,
  })

  function onInstructorFormChange(e) {
    setInstructorFormData({
      ...instructorFormData,
      [e.target.name]: e.target.value,
    });
  }

  const handleInstructorEdit = (e) => {
    e.preventDefault();
    fetch(`/instructors/${ instructor.id }`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instructorFormData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setTimeout(() => setShowInstEditForm(false), 3000)
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000)
            onInstructorEdit(data);
          });
        } else {
          response.json().then((err) => setErrors(err.errors));
        }
      }).catch((error) => console.error("Error:", error));
  };

  return (
    <>
      {success ? (
        <Alert color="success">Instructor was successfully edited!</Alert>
      ) : (
        <Form onSubmit={handleInstructorEdit}>
          <FormGroup>
            <Input
              id="first_name"
              name="first_name"
              placeholder="First Name"
              type="text"
              value={instructorFormData.first_name}
              onChange={onInstructorFormChange}
               style={{backgroundColor: "#c6bcdb"}}
            />
          </FormGroup>
          {"  "}
          <FormGroup>
            <Input
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              type="text"
              value={instructorFormData.last_name}
              onChange={onInstructorFormChange}
               style={{backgroundColor: "#c6bcdb"}}
            />
          </FormGroup>
          {"  "}
          <FormGroup>
            <Input
              id="about"
              name="about"
              placeholder="About"
              type="textarea"
              value={instructorFormData.about}
              onChange={onInstructorFormChange}
               style={{backgroundColor: "#c6bcdb"}}
            />
          </FormGroup>
          {"  "}
          <FormGroup>
            <Input
              id="image"
              name="image"
              placeholder="Image"
              type="text"
              value={instructorFormData.image}
              onChange={onInstructorFormChange}
               style={{backgroundColor: "#c6bcdb"}}
            />
          </FormGroup>{" "}
          <Button
            type="submit"
            size="lg"
            style={{
              backgroundColor: "#583d59",
              borderColor: "#583d59",
              color: "#c6bcdb",
              borderRadius: "0",
              margin: "10px",
            }}
          >
            Submit Edit
          </Button>
          {errors ? errors.map((e) => <Alert>{e}</Alert>) : null}
        </Form>
      )}
    </>
  );
}

export default EditInstructorForm;



// import React, { useState } from "react";
// import { Form, FormGroup, Input, Button, Alert } from "reactstrap";

// function EditInstructorForm({ instructor, onInstructorEdit }) {
//   const [isFormCollapsed, setIsFormCollapsed] = useState(false);
//   const [errors, setErrors] = useState([]);
//   const [success, setSuccess] = useState(false);

//   const [instructorFormData, setInstructorFormData] = useState({
//     first_name: instructor.first_name,
//     last_name: instructor.last_name,
//     about: instructor.about,
//     image: instructor.image,
//   });

//   function onInstructorFormChange(e) {
//     setInstructorFormData({
//       ...instructorFormData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   const handleInstructorEdit = (e) => {
//     e.preventDefault();
//     fetch(`/instructors/${ instructor.id }`, {
//       method: 'PATCH',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(instructorFormData),
//     })
//       .then((response) => {
//         if (response.ok) {
//           response.json().then((data) => {
//             setSuccess(true);
//             setTimeout(() => {
//               setSuccess(false);
//               setIsFormCollapsed(true);
//             }, 3000);
//             onInstructorEdit(data);
//           });
//         } else {
//           response.json().then((data) => setErrors(data));
//         }
//       }).catch((error) => console.error("Error:", error));
//   };

//   return (
//     <>
//       {success ? (
//         <Alert color="success">Instructor was successfully edited!</Alert>
//       ) : isFormCollapsed ? null : (
//         <Form onSubmit={handleInstructorEdit}>
//           <FormGroup>
//             <Input
//               id="first_name"
//               name="first_name"
//               placeholder="First Name"
//               type="text"
//               value={instructorFormData.first_name}
//               onChange={onInstructorFormChange}
//             />
//           </FormGroup>
//           {"  "}
//           <FormGroup>
//             <Input
//               id="last_name"
//               name="last_name"
//               placeholder="Last Name"
//               type="text"
//               value={instructorFormData.last_name}
//               onChange={onInstructorFormChange}
//             />
//           </FormGroup>
//           {"  "}
//           <FormGroup>
//             <Input
//               id="about"
//               name="about"
//               placeholder="About"
//               type="text"
//               value={instructorFormData.about}
//               onChange={onInstructorFormChange}
//             />
//           </FormGroup>
//           {"  "}
//           <FormGroup>
//             <Input
//               id="image"
//               name="image"
//               placeholder="Image"
//               type="text"
//               value={instructorFormData.image}
//               onChange={onInstructorFormChange}
//             />
//           </FormGroup>{" "}
//           <Button
//             type="submit"
//             size="lg"
//             style={{
//               backgroundColor: "#583d59",
//               borderColor: "#583d59",
//               color: "#c6bcdb",
//               borderRadius: "0",
//               margin: "10px",
//             }}
//           >
//             Submit Edit
//           </Button>
//           {errors ? errors.map((e) => <Alert>{e}</Alert>) : null}
//         </Form>
//       )}
//     </>
//   );
// }

// export default EditInstructorForm;