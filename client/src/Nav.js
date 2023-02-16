import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import { Button } from "reactstrap";

function Nav({ currentUser }) {
  return (
    <>
      {currentUser ? (
        <>
          <Navbar expand="lg" style={{ backgroundColor: "#583d59" }}>
            <NavbarBrand href="/">
              <img
                alt="logo"
                src="/AWEFUL-logo2.png"
                style={{
                  height: 95.55,
                  width: 175,
                }}
              />
            </NavbarBrand>
            <Link to="instructors">
              <Button
                size="sm"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                instructors
              </Button>
            </Link>
            <Link to="media">
              <Button
                size="sm"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                media
              </Button>
            </Link>
            <Link to="events">
              <Button
                size="sm"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                events
              </Button>
            </Link>
            <Link to="myevents">
              <Button
                size="sm"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                my events
              </Button>
            </Link>
            <Link to="login">
              <Button
                size="sm"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                login
              </Button>
            </Link>
            <Link to="contact">
              {/* style={{textDecoration: "none", color: "#c6bcdb", fontSize: "20px",}} */}
              <Button
                size="sm"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                contact
              </Button>
            </Link>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar expand="lg" style={{ backgroundColor: "#583d59" }}>
            <NavbarBrand href="/">
              <img
                alt="logo"
                src="/AWEFUL-logo2.png"
                style={{
                  height: 95.55,
                  width: 175,
                }}
              />
            </NavbarBrand>
            <Link to="instructors">
              <Button
                size="lg"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                instructors
              </Button>
            </Link>
            <Link to="media">
              <Button
                size="lg"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                media
              </Button>
            </Link>
            <Link to="events">
              <Button
                size="lg"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                events
              </Button>
            </Link>
            <Link to="login">
              <Button
                size="lg"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                login
              </Button>
            </Link>
            <Link to="contact">
              {/* style={{textDecoration: "none", color: "#c6bcdb", fontSize: "20px",}} */}
              <Button
                size="lg"
                style={{
                  backgroundColor: "#583d59",
                  borderColor: "#583d59",
                  color: "#c6bcdb",
                  borderRadius: "0",
                }}
              >
                contact
              </Button>
            </Link>
          </Navbar>
        </>
      )}
    </>
  );
}

export default Nav;
