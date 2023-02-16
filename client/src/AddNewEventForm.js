
import React from "react";
import { useState } from "react";
import { Alert, Form, Input, FormGroup, Button } from "reactstrap";

function AddNewEventForm({ onAddedEvent, showEventForm, setShowEventForm }) {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [eventFormData, setEventFormData] = useState({
    name: "",
    description: "",
    location: "",
    price: "",
    date: "",
    image: "",
  });

  function onEventFormChange(e) {
    setEventFormData({
      ...eventFormData,
      [e.target.name]: e.target.value,
    });
  }

  const handleEventSubmit = (e) => {
    e.preventDefault();
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventFormData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setTimeout(() => setShowEventForm(!showEventForm), 3000);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            onAddedEvent(data);
          });
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
        <Alert color="success">Event was successfully added!</Alert>
      ) : (
        <Form
          className="event-form"
          onSubmit={handleEventSubmit}
          style={{ width: "30rem" }}
        >
          <FormGroup>
            <Input
              id="name"
              name="name"
              placeholder="Event Name"
              type="text"
              onChange={onEventFormChange}
              style={{ backgroundColor: "#c6bcdb" }}
            />
          </FormGroup>{" "}
          {"   "}
          <FormGroup>
            <Input
              id="description"
              name="description"
              placeholder="Description"
              type="textarea"
              onChange={onEventFormChange}
              style={{ backgroundColor: "#c6bcdb" }}
            />
          </FormGroup>
          {"  "}
          <FormGroup>
            <Input
              id="location"
              name="location"
              placeholder="Location"
              type="text"
              onChange={onEventFormChange}
              style={{ backgroundColor: "#c6bcdb" }}
            />
          </FormGroup>
          {"  "}
          <FormGroup>
            <Input
              id="price"
              name="price"
              placeholder="Price"
              type="text"
              onChange={onEventFormChange}
              style={{ backgroundColor: "#c6bcdb" }}
            />
          </FormGroup>
          {"  "}
          <FormGroup>
            <Input
              id="date"
              name="date"
              placeholder="Date"
              type="date"
              onChange={onEventFormChange}
              style={{ backgroundColor: "#c6bcdb" }}
            />
          </FormGroup>
          {"  "}
          <FormGroup>
            <Input
              id="image"
              name="image"
              placeholder="Image"
              type="text"
              onChange={onEventFormChange}
              style={{ backgroundColor: "#c6bcdb" }}
            />
          </FormGroup>
          {"  "}
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
            Add This Event
          </Button>
          {errors ? errors.map((e) => <Alert>{e}</Alert>) : null}
        </Form>
      )}
    </>
  );
}

export default AddNewEventForm;
