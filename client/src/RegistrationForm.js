import React, { useState, useEffect } from "react";
import { Alert, Form, Input, Label, FormGroup, Button } from "reactstrap";

function RegistrationForm({ event, currentUser, showRegForm, setShowRegForm }) {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch(`/registrations`)
      .then((response) => response.json())
      .then((registrations) => setRegistrations(registrations));
  }, []);

  const [errors, setErrors] = useState([]);
  // const [success, setSuccess] = useState(false);
  const [regFormData, setRegFormData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    membership_number: "",
    number_of_jumps: "",
    tunnel_time: "",
    ratings: "",
    previous_camps: "",
    user_id: currentUser.id,
    event_id: event.id,
  });

  const onRegFormChange = (e) => {
    setRegFormData({
      ...regFormData,
      [e.target.name]: e.target.value,
    });
  };

  const onAddedReg = (newReg) => {
    setRegistrations(...registrations, newReg);
  };


  const handleRegSubmit = (e) => {
    e.preventDefault();
    fetch(`/registrations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regFormData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setTimeout(() => setShowRegForm(false));
            // setSuccess(true);
            // setTimeout(() => setSuccess(false), 3000);
            onAddedReg(data);
          });
        } else {
          response.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((error) => console.error("Errors:", error));
  };

  return (
    <>
      <Form onSubmit={handleRegSubmit} key={event.id}>
        <FormGroup>
          <Input
            id="first_name"
            name="first_name"
            placeholder="First Name"
            type="text"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
        </FormGroup>
        {"  "}
        <FormGroup>
          <Input
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            type="text"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
        </FormGroup>
        {"  "}
        <FormGroup>
          <Input
            id="address"
            name="address"
            placeholder="Address"
            type="Text"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Input
            id="city"
            name="city"
            placeholder="City"
            type="Text"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
        </FormGroup>{" "}
        <FormGroup>
          <Input
            id="state"
            name="state"
            placeholder="State"
            type="Text"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
        </FormGroup>{" "}

        <FormGroup>
          <Input
            id="membership_number"
            name="membership_number"
            placeholder="Membership Number"
            type="Text"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
          <Label for="membership_number" style={{ color: "#c6bcdb" }}>
            What is Your USPA Membership Number?
          </Label>
        </FormGroup>{" "}
        <FormGroup>
          <Input
            id="number_of_jumps"
            name="number_of_jumps"
            placeholder="Number of jumps"
            type="text"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
          <Label for="number_of_jumps" style={{ color: "#c6bcdb" }}>
            How Many Jumps Do You Have?
          </Label>
        </FormGroup>
        {"  "}
        <FormGroup>
          <Input
            id="tunnel_time"
            name="tunnel_time"
            placeholder="Tunnel Time"
            type="text"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
          <Label for="tunnel_time" style={{ color: "#c6bcdb" }}>
            How Much Time Do You Have In The Tunnel?
          </Label>
        </FormGroup>
        {"  "}
        <FormGroup>
          <Input
            id="ratings"
            name="ratings"
            placeholder="Ratings"
            type="textarea"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
          <Label for="ratings" style={{ color: "#c6bcdb" }}>
            What Ratings Do You Hold?
          </Label>
        </FormGroup>
        {"  "}
        <FormGroup>
          <Input
            id="previous_camps"
            name="previous_camps"
            placeholder="Previous Camps"
            type="textarea"
            onChange={onRegFormChange}
            style={{ backgroundColor: "#c6bcdb" }}
          />
          <Label for="previous_camps" style={{ color: "#c6bcdb" }}>
            Have you attended any kind of camp before?
          </Label>
        </FormGroup>
        {"  "}
        <Button
          size="lg"
          style={{
            backgroundColor: "#583d59",
            borderColor: "#583d59",
            color: "#c6bcdb",
            borderRadius: "0",
            margin: "10px",
          }}
        >
          submit registration
        </Button>
        {/* {success ?  (<Alert color="success">Get excited! You are going to this event!</Alert>) : null} //this needs to be on the card body. need to move lots back up */}
        {errors ? errors.map((e) => <Alert color="danger">{e}</Alert>) : null}
      </Form>
    </>
  );
}

export default RegistrationForm;
