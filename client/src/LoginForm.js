import React, { useState } from "react";
import { Alert, Form, FormGroup, Input, Button } from "reactstrap";

function LoginForm({ currentUser, setCurrentUser, handleLogOut, setShowLogin, showLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
        setShowLogin(!showLogin);
        e.target.reset();
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          id="email"
          name="email"
          placeholder="enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ backgroundColor: "#c6bcdb" }}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="password"
          name="password"
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ backgroundColor: "#c6bcdb" }}
        />
      </FormGroup>

      <Button
        type="submit"
        size="lg"
        style={{
          backgroundColor: "#583d59",
          borderColor: "#583d59",
          color: "#c6bcdb",
          borderRadius: "0",
        }}
      >
        log in
      </Button>
        <header className="divider"></header>
      {errors ? errors.map((e) => <Alert color="danger">{e}</Alert>) : null}
    </Form>
  );
}

export default LoginForm;
