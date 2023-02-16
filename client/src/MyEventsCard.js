import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

function MyEventsCard({event, currentUser}) {
  return (
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
        </CardBody>
      </Card>
    </>
  );
}

export default MyEventsCard