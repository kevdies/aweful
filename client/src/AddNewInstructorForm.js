import React from "react";
import { useState } from "react";
import { Alert, Form, FormText, Input, Label, FormGroup, Button } from "reactstrap";

function AddNewInstructorForm({ onAddedInstructor, showForm, setShowForm }) {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [instructorFormData, setInstructorFormData] = useState({
    first_name: "",
    last_name: "",
    about: "",
    image: "",
  });
  console.log(errors)

  function onInstructorFormChange(e) {
    setInstructorFormData({
      ...instructorFormData,
      [e.target.name]: e.target.value,
    });
  }

  const handleInstructorSubmit = (e) => {
    e.preventDefault();
    fetch(`/instructors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instructorFormData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setTimeout(() => setShowForm(!showForm), 3000);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            onAddedInstructor(data);
          })
        } else {
          response.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  // e.target.reset();


  return (
    <>
      {success ? (
        <Alert color="success">Instructor was successfully added!</Alert>
      ) : (
        <Form onSubmit={handleInstructorSubmit} style={{width: "30rem", }}>
          <FormGroup floating>
            <Input
              className="addInstructor"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              type="text"
              onChange={onInstructorFormChange}
               style={{backgroundColor: "#c6bcdb"}}
            />
            <Label for="first_name">First Name</Label>
          </FormGroup>{" "}
          <FormGroup floating>
            <Input
              className="addInstructor"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              type="text"
              onChange={onInstructorFormChange}
               style={{backgroundColor: "#c6bcdb"}}
            />
            <Label for="last_name">Last Name</Label>
          </FormGroup>{" "}
          <FormGroup floating>
            <Input
              className="addInstructor"
              id="about"
              name="about"
              placeholder="About"
              type="textarea"
              onChange={onInstructorFormChange}
               style={{backgroundColor: "#c6bcdb"}}
            />
            <Label for="about">About</Label>
          </FormGroup>{" "}
          <FormGroup floating>
            <Input
              
              id="instructorImage"
              name="image"
              placeholder="Image"
              type="text"
              onChange={onInstructorFormChange}
               style={{backgroundColor: "#c6bcdb"}}
            />
            <Label for="instructorImage">Image</Label>
            <FormText color="black">
              Select the image you want to display for the instructor.
            </FormText>
          </FormGroup>{" "}
          {/* <FormGroup>
                <Input
                  className="addInstructor"
                  id="instructorImage"
                  name="image"
                  type="file"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
                <FormText color="black">
                  Select the image you want to display for the instructor.
                </FormText>
              </FormGroup>{" "} */}
            <Button
            type="submit"
            size="lg"
            style={{
              backgroundColor: "#583d59",
              borderColor: "#583d59",
              color: "#c6bcdb",
              borderRadius: "0",
              marginBottom: "10px",
            }}
          >
            Add This Instructor
          </Button>
          {errors ? errors.map((e) => <Alert>{e}</Alert>) : null}
        </Form>
      )}
    </>
  )
}

export default AddNewInstructorForm;
