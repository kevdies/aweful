import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MyEventsCard from "./MyEventsCard";

function MyEvents({ currentUser }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`/users/${currentUser.id}/events`)
      .then((response) => response.json())
      .then((events) => setEvents(events));
  }, []);

  return (
    <>
      <Container fluid style={{ backgroundColor: "#929292", minHeight: "100vh" }}>
        <Row>
          <Col>
            <header className="divider"></header>
            <header className="divider"></header>
            <h1 className="text-center">
              {events.length > 0 ? (
                <strong>
                  Get excited! You have {events.length} amazing events coming up soon!
                </strong>
              ) : (
                <strong>
                  Registering for an event unlocks the convenience of having all
                  your upcoming events organized in one place!
                </strong>
              )}
            </h1>
            <header className="divider"></header>
            <header className="divider"></header>
          </Col>
        </Row>
        <Row>
          {events.map((event) => (
            <Col className="col d-flex justify-content-center">
              <MyEventsCard
                key={event.id}
                event={event}
                currentUser={currentUser}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MyEvents;
