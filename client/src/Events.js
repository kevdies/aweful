import { useState, useEffect, React } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import EventCard from "./EventCard";
import AddNewEventForm from "./AddNewEventForm";

function Events({ currentUser }) {
  const [showEventForm, setShowEventForm] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const onAddedEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const onEventEdit = (updatedEvent) => {
    const eventsAfterEdit = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(eventsAfterEdit);
  };

  const onEventDelete = (eventId) => {
    const eventsAfterDelete = events.filter((event) => event.id !== eventId);
    setEvents([...eventsAfterDelete]);
  };

  const handleShowEventForm = () => {
    setShowEventForm(!showEventForm);
  };

  return (
    <>
      {(currentUser.email === "admin@admin.com") ? (
        <>
          <Container fluid style={{ backgroundColor: "#929292", minHeight: "100vh" }}>
            <Row>
              <Row>
                <Col>
                  {showEventForm ? (
                    <Button
                      onClick={handleShowEventForm}
                      size="lg"
                      style={{
                        backgroundColor: "#583d59",
                        borderColor: "#583d59",
                        color: "#c6bcdb",
                        borderRadius: "0",
                        margin: "10px",
                      }}
                    >
                      Add New Event
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={handleShowEventForm}
                        size="lg"
                        style={{
                          backgroundColor: "#583d59",
                          borderColor: "#583d59",
                          color: "#c6bcdb",
                          borderRadius: "0",
                          margin: "10px",
                        }}
                      >
                        <i class="bi-dash-square"></i>
                      </Button>
                      <AddNewEventForm
                        onAddedEvent={onAddedEvent}
                        setShowEventForm={setShowEventForm}
                        showEventForm={showEventForm}
                      />
                    </>
                  )}
                </Col>
              </Row>

              {events.map((event) => (
                <Col className="col d-flex justify-content-center">
                  <EventCard
                    key={event.id}
                    event={event}
                    onEventDelete={onEventDelete}
                    onEventEdit={onEventEdit}
                    setShowEventForm={setShowEventForm}
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
              {events.map((event) => (
                <Col className="col d-flex justify-content-center">
                  <EventCard
                    key={event.id}
                    event={event}
                    onEventDelete={onEventDelete}
                    onEventEdit={onEventEdit}
                    setShowEventForm={setShowEventForm}
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

//   );
// }

export default Events;
