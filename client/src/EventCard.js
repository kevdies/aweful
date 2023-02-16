import React, { useState } from "react";
import EditEventForm from "./EditEventForm";
import RegistrationForm from "./RegistrationForm";
import {
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Alert,
} from "reactstrap";

function EventCard({ event, onEventDelete, onEventEdit, currentUser }) {
  const [errors, setErrors] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showRegForm, setShowRegForm] = useState(false);

  const handleEventDelete = () => {
    fetch(`/events/${event.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        onEventDelete(event.id);
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <>
      {currentUser.email === "admin@admin.com" ? (
        <>
          <Card
            className="text-center"
            key={event.id}
            style={{
              margin: "20px",
              width: "50rem",
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
            <CardHeader
              className="text-center"
              style={{
                backgroundColor: "#272730",
                color: "#697260",
                borderColor: "#272730",
              }}
            >
              <h2>
                {" "}
                <strong>{event.name}</strong>{" "}
              </h2>
            </CardHeader>
            <CardImg alt="Event Image" src={event.image} top width="100%" />
            <CardBody style={{ backgroundColor: "#272730", color: "#697260" }}>
              <CardTitle>
                <strong>Event begins: </strong>
                {event.date}
              </CardTitle>
              <CardText>
                <strong>Cost: </strong>${event.price}
              </CardText>
              <CardText>
                <strong>Dropzone: </strong>
                {event.location}
              </CardText>
              <CardText>
                <strong>{event.description}</strong>
              </CardText>
              {showRegForm ? (
                <Button
                  onClick={() => setShowRegForm(!showRegForm)}
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
              ) : (
                <Button
                  onClick={() => setShowRegForm(!showRegForm)}
                  size="lg"
                  style={{
                    backgroundColor: "#583d59",
                    borderColor: "#583d59",
                    color: "#c6bcdb",
                    borderRadius: "0",
                    margin: "10px",
                  }}
                >
                  register for this event
                </Button>
              )}

              <Button
                onClick={() => {
                  setShowEditForm(!showEditForm);
                }}
                size="lg"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                {showEditForm ? (
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
                onClick={() => handleEventDelete(event.id)}
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
            {errors ? errors.map((e) => <Alert>{e}</Alert>) : null}
            <CardBody style={{ backgroundColor: "#272730" }}>
              {showEditForm ? (
                <EditEventForm
                  event={event}
                  onEventEdit={onEventEdit}
                  showEditForm={showEditForm}
                  setShowEditForm={setShowEditForm}
                />
              ) : null}
              {showRegForm ? (
                <RegistrationForm
                  event={event}
                  currentUser={currentUser}
                  showRegForm={showRegForm}
                  setShowRegForm={setShowRegForm}
                />
              ) : null}
            </CardBody>
          </Card>
        </>
      ) : (
        <>
          <Card
            className="text-center"
            key={event.id}
            style={{
              margin: "20px",
              width: "50rem",
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
            <CardHeader
              className="text-center"
              style={{
                backgroundColor: "#272730",
                color: "#697260",
                borderColor: "#272730",
              }}
            >
              <h2>
                {" "}
                <strong>{event.name}</strong>{" "}
              </h2>
            </CardHeader>
            <CardImg alt="Event Image" src={event.image} top width="100%" />
            <CardBody style={{ backgroundColor: "#272730", color: "#697260" }}>
              <CardTitle>
                <strong>Event begins: </strong>
                {event.date}
              </CardTitle>
              <CardText>
                <strong>Cost: </strong>${event.price}
              </CardText>
              <CardText>
                <strong>Dropzone: </strong>
                {event.location}
              </CardText>
              <CardText>
                <strong>{event.description}</strong>
              </CardText>
              {showRegForm ? (
                <Button
                  onClick={() => setShowRegForm(!showRegForm)}
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
              ) : (
                <Button
                  onClick={() => setShowRegForm(!showRegForm)}
                  size="lg"
                  style={{
                    backgroundColor: "#583d59",
                    borderColor: "#583d59",
                    color: "#c6bcdb",
                    borderRadius: "0",
                    margin: "10px",
                  }}
                >
                  register for this event
                </Button>
              )}
            </CardBody>
            {errors ? errors.map((e) => <Alert>{e}</Alert>) : null}
            <CardBody style={{ backgroundColor: "#272730" }}>
              {showRegForm ? (
                <RegistrationForm
                  event={event}
                  currentUser={currentUser}
                  showRegForm={showRegForm}
                  setShowRegForm={setShowRegForm}
                />
              ) : null}
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
}

export default EventCard;
