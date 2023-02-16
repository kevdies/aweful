import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Alert } from "reactstrap";

function EditEventForm({ event, onEventEdit, showEditForm, setShowEditForm }) {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const [eventFormData, setEventFormData] = useState({
    name: event.name,
    description: event.description,
    location: event.location,
    price: event.price,
    date: event.date,
    image: event.image,
  });

  function onEventFormChange(e) {
    setEventFormData({
      ...eventFormData,
      [e.target.name]: e.target.value,
    });
  }

  const handleEventEdit = (e) => {
    e.preventDefault();
    fetch(`/events/${event.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventFormData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setTimeout(() => setShowEditForm(false), 3000);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
            onEventEdit(data);
          });
        } else {
          response.json().then((err) => setErrors(err.errors));
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      {success ? (
        <Alert color="success">Event was successfully edited!</Alert>
      ) : (
        <Form onSubmit={handleEventEdit} className="event-form">
          <FormGroup>
            <Input
              id="name"
              name="name"
              placeholder="Event Name"
              type="text"
              value={eventFormData.name}
              onChange={onEventFormChange}
              style={{ backgroundColor: "#c6bcdb" }}
            />
          </FormGroup>
          {"   "}
          <FormGroup>
            <Input
              id="description"
              name="description"
              placeholder="Description"
              type="textarea"
              value={eventFormData.description}
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
              value={eventFormData.location}
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
              value={eventFormData.price}
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
              value={eventFormData.date}
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
            Submit Edit
          </Button>
          {errors ? errors.map((e) => <Alert>{e}</Alert>) : null}
        </Form>
      )}
    </>
  );
}

export default EditEventForm;
