import React, { useState } from "react";
import LoginForm from "./LoginForm";
import UserSignUpForm from "./UserSignUpForm";
import { Button, Container, Row, Col } from "reactstrap";

function Login({ currentUser, setCurrentUser, handleLogOut }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Container fluid style={{ minHeight: "100vh", backgroundColor: "#929292" }}>
        <Row className="justify-content-center align-items-center">
          <Col md={6}>
            {currentUser ? (
              <>
                <header className="divider"></header>
                <header className="divider"></header>
                <h1 className="text-center">
                  Register for an event before the slots fill up!
                </h1>
                <header className="divider"></header>
                <header className="divider"></header>
                <LoginForm
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  handleLogOut={handleLogOut}
                />
                <header className="divider"></header>

                <Button
                  size="lg"
                  style={{
                    backgroundColor: "#583d59",
                    borderColor: "#583d59",
                    color: "#c6bcdb",
                    borderRadius: "0",
                  }}
                  onClick={handleLogOut}
                >
                  log out
                </Button>
              </>
            ) : (
              <>
                <header className="divider"></header>
                <header className="divider"></header>
                <h2 className="text-center">
                  Want to register for an event? Create an account or log in
                  first!
                </h2>
                <header className="divider"></header>
                <header className="divider"></header>
                <UserSignUpForm
                  setCurrentUser={setCurrentUser}
                  handleLogOut={handleLogOut}
                />
                <>
                  <header className="divider"></header>
                </>
              </>
            )}
            <>
              {currentUser ? null : (
                <>
                  <p>Have An Account?</p>
                  {showLogin ? (
                    <Button
                      size="lg"
                      style={{
                        backgroundColor: "#583d59",
                        borderColor: "#583d59",
                        color: "#c6bcdb",
                        borderRadius: "0",
                      }}
                      onClick={() => setShowLogin(!showLogin)}
                    >
                      <i className="bi-dash-square"></i>
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      style={{
                        backgroundColor: "#583d59",
                        borderColor: "#583d59",
                        color: "#c6bcdb",
                        borderRadius: "0",
                      }}
                      onClick={() => setShowLogin(!showLogin)}
                    >
                      Log In
                    </Button>
                  )}

                  <>
                    <header className="divider"></header>
                    {showLogin ? (
                      <LoginForm
                        showLogin={showLogin}
                        setShowLogin={setShowLogin}
                        setCurrentUser={setCurrentUser}
                        currentUser={currentUser}
                      />
                    ) : null}
                  </>
                </>
              )}
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
